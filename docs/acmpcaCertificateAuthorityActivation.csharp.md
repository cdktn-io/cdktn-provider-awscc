# `acmpcaCertificateAuthorityActivation` Submodule <a name="`acmpcaCertificateAuthorityActivation` Submodule" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthorityActivation <a name="AcmpcaCertificateAuthorityActivation" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation awscc_acmpca_certificate_authority_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AcmpcaCertificateAuthorityActivation(Construct Scope, string Id, AcmpcaCertificateAuthorityActivationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig">AcmpcaCertificateAuthorityActivationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig">AcmpcaCertificateAuthorityActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetCertificateChain"></a>

```csharp
private void ResetCertificateChain()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AcmpcaCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AcmpcaCertificateAuthorityActivation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AcmpcaCertificateAuthorityActivation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AcmpcaCertificateAuthorityActivation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AcmpcaCertificateAuthorityActivation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AcmpcaCertificateAuthorityActivation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AcmpcaCertificateAuthorityActivation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AcmpcaCertificateAuthorityActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificateAuthorityActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.completeCertificateChain">CompleteCertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChainInput">CertificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CompleteCertificateChain`<sup>Required</sup> <a name="CompleteCertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.completeCertificateChain"></a>

```csharp
public string CompleteCertificateChain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArnInput"></a>

```csharp
public string CertificateAuthorityArnInput { get; }
```

- *Type:* string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChainInput"></a>

```csharp
public string CertificateChainInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityActivationConfig <a name="AcmpcaCertificateAuthorityActivationConfig" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AcmpcaCertificateAuthorityActivationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Certificate,
    string CertificateAuthorityArn,
    string CertificateChain = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificate">Certificate</a></code> | <code>string</code> | Certificate Authority certificate that will be installed in the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | Arn of the Certificate Authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateChain">CertificateChain</a></code> | <code>string</code> | Certificate chain for the Certificate Authority certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.status">Status</a></code> | <code>string</code> | The status of the Certificate Authority. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Certificate Authority certificate that will be installed in the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#certificate AcmpcaCertificateAuthorityActivation#certificate}

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; set; }
```

- *Type:* string

Arn of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#certificate_authority_arn AcmpcaCertificateAuthorityActivation#certificate_authority_arn}

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.certificateChain"></a>

```csharp
public string CertificateChain { get; set; }
```

- *Type:* string

Certificate chain for the Certificate Authority certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#certificate_chain AcmpcaCertificateAuthorityActivation#certificate_chain}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.acmpcaCertificateAuthorityActivation.AcmpcaCertificateAuthorityActivationConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/acmpca_certificate_authority_activation#status AcmpcaCertificateAuthorityActivation#status}

---



