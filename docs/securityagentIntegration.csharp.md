# `securityagentIntegration` Submodule <a name="`securityagentIntegration` Submodule" id="@cdktn/provider-awscc.securityagentIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentIntegration <a name="SecurityagentIntegration" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration awscc_securityagent_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegration(Construct Scope, string Id, SecurityagentIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig">SecurityagentIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig">SecurityagentIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput">PutProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName">ResetPrivateConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput">ResetProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderInput` <a name="PutProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput"></a>

```csharp
private void PutProviderInput(SecurityagentIntegrationProviderInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putProviderInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags"></a>

```csharp
private void PutTags(IResolvable|SecurityagentIntegrationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPrivateConnectionName` <a name="ResetPrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetPrivateConnectionName"></a>

```csharp
private void ResetPrivateConnectionName()
```

##### `ResetProviderInput` <a name="ResetProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetProviderInput"></a>

```csharp
private void ResetProviderInput()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityagentIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput">PrivateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput">ProviderInputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName">PrivateConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Required</sup> <a name="ProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInput"></a>

```csharp
public SecurityagentIntegrationProviderInputOutputReference ProviderInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference">SecurityagentIntegrationProviderInputOutputReference</a>

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tags"></a>

```csharp
public SecurityagentIntegrationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList">SecurityagentIntegrationTagsList</a>

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateConnectionNameInput`<sup>Optional</sup> <a name="PrivateConnectionNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionNameInput"></a>

```csharp
public string PrivateConnectionNameInput { get; }
```

- *Type:* string

---

##### `ProviderInputInput`<sup>Optional</sup> <a name="ProviderInputInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerInputInput"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInput ProviderInputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tagsInput"></a>

```csharp
public IResolvable|SecurityagentIntegrationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.privateConnectionName"></a>

```csharp
public string PrivateConnectionName { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentIntegrationConfig <a name="SecurityagentIntegrationConfig" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string ProviderName,
    string KmsKeyId = null,
    string PrivateConnectionName = null,
    SecurityagentIntegrationProviderInput ProviderInput = null,
    IResolvable|SecurityagentIntegrationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName">ProviderName</a></code> | <code>string</code> | The integration provider. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The identifier of the AWS KMS key to use for encrypting data associated with the integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName">PrivateConnectionName</a></code> | <code>string</code> | The name of an active private connection used to reach a self-hosted provider instance over private networking. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput">ProviderInput</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]</code> | The tags to associate with the integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#display_name SecurityagentIntegration#display_name}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

The integration provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#provider_name SecurityagentIntegration#provider_name}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The identifier of the AWS KMS key to use for encrypting data associated with the integration.

Can be a key ID, key ARN, alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#kms_key_id SecurityagentIntegration#kms_key_id}

---

##### `PrivateConnectionName`<sup>Optional</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.privateConnectionName"></a>

```csharp
public string PrivateConnectionName { get; set; }
```

- *Type:* string

The name of an active private connection used to reach a self-hosted provider instance over private networking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#private_connection_name SecurityagentIntegration#private_connection_name}

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.providerInput"></a>

```csharp
public SecurityagentIntegrationProviderInput ProviderInput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

The provider-specific input required to create the integration. Exactly one of the provider input objects must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#provider_input SecurityagentIntegration#provider_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationConfig.property.tags"></a>

```csharp
public IResolvable|SecurityagentIntegrationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

The tags to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#tags SecurityagentIntegration#tags}

---

### SecurityagentIntegrationProviderInput <a name="SecurityagentIntegrationProviderInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInput {
    SecurityagentIntegrationProviderInputBitbucket Bitbucket = null,
    SecurityagentIntegrationProviderInputConfluence Confluence = null,
    SecurityagentIntegrationProviderInputGithub Github = null,
    SecurityagentIntegrationProviderInputGitlab Gitlab = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | The input required to create a Bitbucket integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence">Confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | The input required to create a Confluence integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | The input required to create a GitHub integration. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | The input required to create a GitLab integration. |

---

##### `Bitbucket`<sup>Optional</sup> <a name="Bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.bitbucket"></a>

```csharp
public SecurityagentIntegrationProviderInputBitbucket Bitbucket { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

The input required to create a Bitbucket integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#bitbucket SecurityagentIntegration#bitbucket}

---

##### `Confluence`<sup>Optional</sup> <a name="Confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.confluence"></a>

```csharp
public SecurityagentIntegrationProviderInputConfluence Confluence { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

The input required to create a Confluence integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#confluence SecurityagentIntegration#confluence}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.github"></a>

```csharp
public SecurityagentIntegrationProviderInputGithub Github { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

The input required to create a GitHub integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#github SecurityagentIntegration#github}

---

##### `Gitlab`<sup>Optional</sup> <a name="Gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput.property.gitlab"></a>

```csharp
public SecurityagentIntegrationProviderInputGitlab Gitlab { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

The input required to create a GitLab integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#gitlab SecurityagentIntegration#gitlab}

---

### SecurityagentIntegrationProviderInputBitbucket <a name="SecurityagentIntegrationProviderInputBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputBitbucket {
    string Code = null,
    string InstallationId = null,
    string State = null,
    string Workspace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code">Code</a></code> | <code>string</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId">InstallationId</a></code> | <code>string</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state">State</a></code> | <code>string</code> | The CSRF state token echoed back from the OAuth redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace">Workspace</a></code> | <code>string</code> | The Bitbucket workspace slug that identifies the workspace to integrate. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.installationId"></a>

```csharp
public string InstallationId { get; set; }
```

- *Type:* string

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket.property.workspace"></a>

```csharp
public string Workspace { get; set; }
```

- *Type:* string

The Bitbucket workspace slug that identifies the workspace to integrate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#workspace SecurityagentIntegration#workspace}

---

### SecurityagentIntegrationProviderInputConfluence <a name="SecurityagentIntegrationProviderInputConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputConfluence {
    string Code = null,
    string InstallationId = null,
    string SiteUrl = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code">Code</a></code> | <code>string</code> | The OAuth 2.0 authorization code returned from the consent redirect. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId">InstallationId</a></code> | <code>string</code> | The Atlassian installation identifier, available from the Atlassian administration console. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl">SiteUrl</a></code> | <code>string</code> | The Confluence Cloud site URL, for example https://mysite.atlassian.net. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state">State</a></code> | <code>string</code> | The CSRF state token echoed back from the OAuth redirect. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

The OAuth 2.0 authorization code returned from the consent redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.installationId"></a>

```csharp
public string InstallationId { get; set; }
```

- *Type:* string

The Atlassian installation identifier, available from the Atlassian administration console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `SiteUrl`<sup>Optional</sup> <a name="SiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.siteUrl"></a>

```csharp
public string SiteUrl { get; set; }
```

- *Type:* string

The Confluence Cloud site URL, for example https://mysite.atlassian.net.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#site_url SecurityagentIntegration#site_url}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The CSRF state token echoed back from the OAuth redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

### SecurityagentIntegrationProviderInputGithub <a name="SecurityagentIntegrationProviderInputGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputGithub {
    string Code = null,
    string InstallationId = null,
    string OrganizationName = null,
    string State = null,
    string TargetUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code">Code</a></code> | <code>string</code> | The OAuth authorization code received from GitHub. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId">InstallationId</a></code> | <code>string</code> | The installation identifier provided by GitHub Enterprise Server on the install callback. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName">OrganizationName</a></code> | <code>string</code> | The name of the GitHub organization to integrate with. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state">State</a></code> | <code>string</code> | The CSRF state token for validating the OAuth flow. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl">TargetUrl</a></code> | <code>string</code> | The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

The OAuth authorization code received from GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#code SecurityagentIntegration#code}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.installationId"></a>

```csharp
public string InstallationId { get; set; }
```

- *Type:* string

The installation identifier provided by GitHub Enterprise Server on the install callback.

Required for GitHub Enterprise Server integrations and ignored for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#installation_id SecurityagentIntegration#installation_id}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.organizationName"></a>

```csharp
public string OrganizationName { get; set; }
```

- *Type:* string

The name of the GitHub organization to integrate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#organization_name SecurityagentIntegration#organization_name}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The CSRF state token for validating the OAuth flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#state SecurityagentIntegration#state}

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub.property.targetUrl"></a>

```csharp
public string TargetUrl { get; set; }
```

- *Type:* string

The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

### SecurityagentIntegrationProviderInputGitlab <a name="SecurityagentIntegrationProviderInputGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputGitlab {
    string AccessToken = null,
    string GroupId = null,
    string TargetUrl = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken">AccessToken</a></code> | <code>string</code> | The GitLab access token used to authenticate. This can be a personal access token or a group access token. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId">GroupId</a></code> | <code>string</code> | The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl">TargetUrl</a></code> | <code>string</code> | The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com). |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType">TokenType</a></code> | <code>string</code> | The type of GitLab access token. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

The GitLab access token used to authenticate. This can be a personal access token or a group access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#access_token SecurityagentIntegration#access_token}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#group_id SecurityagentIntegration#group_id}

---

##### `TargetUrl`<sup>Optional</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.targetUrl"></a>

```csharp
public string TargetUrl { get; set; }
```

- *Type:* string

The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#target_url SecurityagentIntegration#target_url}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of GitLab access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#token_type SecurityagentIntegration#token_type}

---

### SecurityagentIntegrationTags <a name="SecurityagentIntegrationTags" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#key SecurityagentIntegration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_integration#value SecurityagentIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentIntegrationProviderInputBitbucketOutputReference <a name="SecurityagentIntegrationProviderInputBitbucketOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputBitbucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetInstallationId"></a>

```csharp
private void ResetInstallationId()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.resetWorkspace"></a>

```csharp
private void ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationIdInput"></a>

```csharp
public string InstallationIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspaceInput"></a>

```csharp
public string WorkspaceInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputBitbucket InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---


### SecurityagentIntegrationProviderInputConfluenceOutputReference <a name="SecurityagentIntegrationProviderInputConfluenceOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputConfluenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl">ResetSiteUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetInstallationId"></a>

```csharp
private void ResetInstallationId()
```

##### `ResetSiteUrl` <a name="ResetSiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetSiteUrl"></a>

```csharp
private void ResetSiteUrl()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput">SiteUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl">SiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationIdInput"></a>

```csharp
public string InstallationIdInput { get; }
```

- *Type:* string

---

##### `SiteUrlInput`<sup>Optional</sup> <a name="SiteUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrlInput"></a>

```csharp
public string SiteUrlInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `SiteUrl`<sup>Required</sup> <a name="SiteUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.siteUrl"></a>

```csharp
public string SiteUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputConfluence InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---


### SecurityagentIntegrationProviderInputGithubOutputReference <a name="SecurityagentIntegrationProviderInputGithubOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetInstallationId"></a>

```csharp
private void ResetInstallationId()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetOrganizationName"></a>

```csharp
private void ResetOrganizationName()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.resetTargetUrl"></a>

```csharp
private void ResetTargetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput">OrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationIdInput"></a>

```csharp
public string InstallationIdInput { get; }
```

- *Type:* string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationNameInput"></a>

```csharp
public string OrganizationNameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrlInput"></a>

```csharp
public string TargetUrlInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputGithub InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---


### SecurityagentIntegrationProviderInputGitlabOutputReference <a name="SecurityagentIntegrationProviderInputGitlabOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputGitlabOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl">ResetTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetTargetUrl` <a name="ResetTargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTargetUrl"></a>

```csharp
private void ResetTargetUrl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput">TargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl">TargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `TargetUrlInput`<sup>Optional</sup> <a name="TargetUrlInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrlInput"></a>

```csharp
public string TargetUrlInput { get; }
```

- *Type:* string

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `TargetUrl`<sup>Required</sup> <a name="TargetUrl" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.targetUrl"></a>

```csharp
public string TargetUrl { get; }
```

- *Type:* string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputGitlab InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---


### SecurityagentIntegrationProviderInputOutputReference <a name="SecurityagentIntegrationProviderInputOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationProviderInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket">PutBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence">PutConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab">PutGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket">ResetBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence">ResetConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab">ResetGitlab</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBitbucket` <a name="PutBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket"></a>

```csharp
private void PutBitbucket(SecurityagentIntegrationProviderInputBitbucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putBitbucket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---

##### `PutConfluence` <a name="PutConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence"></a>

```csharp
private void PutConfluence(SecurityagentIntegrationProviderInputConfluence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putConfluence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---

##### `PutGithub` <a name="PutGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub"></a>

```csharp
private void PutGithub(SecurityagentIntegrationProviderInputGithub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---

##### `PutGitlab` <a name="PutGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab"></a>

```csharp
private void PutGitlab(SecurityagentIntegrationProviderInputGitlab Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.putGitlab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---

##### `ResetBitbucket` <a name="ResetBitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetBitbucket"></a>

```csharp
private void ResetBitbucket()
```

##### `ResetConfluence` <a name="ResetConfluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetConfluence"></a>

```csharp
private void ResetConfluence()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGitlab` <a name="ResetGitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.resetGitlab"></a>

```csharp
private void ResetGitlab()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket">Bitbucket</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence">Confluence</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput">BitbucketInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput">ConfluenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput">GithubInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput">GitlabInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bitbucket`<sup>Required</sup> <a name="Bitbucket" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucket"></a>

```csharp
public SecurityagentIntegrationProviderInputBitbucketOutputReference Bitbucket { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucketOutputReference">SecurityagentIntegrationProviderInputBitbucketOutputReference</a>

---

##### `Confluence`<sup>Required</sup> <a name="Confluence" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluence"></a>

```csharp
public SecurityagentIntegrationProviderInputConfluenceOutputReference Confluence { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluenceOutputReference">SecurityagentIntegrationProviderInputConfluenceOutputReference</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.github"></a>

```csharp
public SecurityagentIntegrationProviderInputGithubOutputReference Github { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithubOutputReference">SecurityagentIntegrationProviderInputGithubOutputReference</a>

---

##### `Gitlab`<sup>Required</sup> <a name="Gitlab" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlab"></a>

```csharp
public SecurityagentIntegrationProviderInputGitlabOutputReference Gitlab { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlabOutputReference">SecurityagentIntegrationProviderInputGitlabOutputReference</a>

---

##### `BitbucketInput`<sup>Optional</sup> <a name="BitbucketInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.bitbucketInput"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputBitbucket BitbucketInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputBitbucket">SecurityagentIntegrationProviderInputBitbucket</a>

---

##### `ConfluenceInput`<sup>Optional</sup> <a name="ConfluenceInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.confluenceInput"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputConfluence ConfluenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputConfluence">SecurityagentIntegrationProviderInputConfluence</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.githubInput"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputGithub GithubInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGithub">SecurityagentIntegrationProviderInputGithub</a>

---

##### `GitlabInput`<sup>Optional</sup> <a name="GitlabInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.gitlabInput"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInputGitlab GitlabInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputGitlab">SecurityagentIntegrationProviderInputGitlab</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationProviderInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationProviderInput">SecurityagentIntegrationProviderInput</a>

---


### SecurityagentIntegrationTagsList <a name="SecurityagentIntegrationTagsList" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get"></a>

```csharp
private SecurityagentIntegrationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>[]

---


### SecurityagentIntegrationTagsOutputReference <a name="SecurityagentIntegrationTagsOutputReference" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentIntegrationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentIntegrationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentIntegration.SecurityagentIntegrationTags">SecurityagentIntegrationTags</a>

---



