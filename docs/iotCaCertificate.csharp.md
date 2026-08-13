# `iotCaCertificate` Submodule <a name="`iotCaCertificate` Submodule" id="@cdktn/provider-awscc.iotCaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotCaCertificate <a name="IotCaCertificate" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate awscc_iot_ca_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificate(Construct Scope, string Id, IotCaCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig">IotCaCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig">IotCaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig">PutRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus">ResetAutoRegistrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode">ResetCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig">ResetRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration">ResetRemoveAutoRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem">ResetVerificationCertificatePem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRegistrationConfig` <a name="PutRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig"></a>

```csharp
private void PutRegistrationConfig(IotCaCertificateRegistrationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putRegistrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags"></a>

```csharp
private void PutTags(IResolvable|IotCaCertificateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

---

##### `ResetAutoRegistrationStatus` <a name="ResetAutoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetAutoRegistrationStatus"></a>

```csharp
private void ResetAutoRegistrationStatus()
```

##### `ResetCertificateMode` <a name="ResetCertificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetCertificateMode"></a>

```csharp
private void ResetCertificateMode()
```

##### `ResetRegistrationConfig` <a name="ResetRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRegistrationConfig"></a>

```csharp
private void ResetRegistrationConfig()
```

##### `ResetRemoveAutoRegistration` <a name="ResetRemoveAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetRemoveAutoRegistration"></a>

```csharp
private void ResetRemoveAutoRegistration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVerificationCertificatePem` <a name="ResetVerificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.resetVerificationCertificatePem"></a>

```csharp
private void ResetVerificationCertificatePem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCaCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCaCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCaCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotCaCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotCaCertificate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotCaCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotCaCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotCaCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId">CaCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig">RegistrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput">AutoRegistrationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput">CaCertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput">CertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput">RegistrationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput">RemoveAutoRegistrationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput">VerificationCertificatePemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus">AutoRegistrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem">CaCertificatePem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode">CertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration">RemoveAutoRegistration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem">VerificationCertificatePem</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CaCertificateId`<sup>Required</sup> <a name="CaCertificateId" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificateId"></a>

```csharp
public string CaCertificateId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegistrationConfig`<sup>Required</sup> <a name="RegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfig"></a>

```csharp
public IotCaCertificateRegistrationConfigOutputReference RegistrationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference">IotCaCertificateRegistrationConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tags"></a>

```csharp
public IotCaCertificateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList">IotCaCertificateTagsList</a>

---

##### `AutoRegistrationStatusInput`<sup>Optional</sup> <a name="AutoRegistrationStatusInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatusInput"></a>

```csharp
public string AutoRegistrationStatusInput { get; }
```

- *Type:* string

---

##### `CaCertificatePemInput`<sup>Optional</sup> <a name="CaCertificatePemInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePemInput"></a>

```csharp
public string CaCertificatePemInput { get; }
```

- *Type:* string

---

##### `CertificateModeInput`<sup>Optional</sup> <a name="CertificateModeInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateModeInput"></a>

```csharp
public string CertificateModeInput { get; }
```

- *Type:* string

---

##### `RegistrationConfigInput`<sup>Optional</sup> <a name="RegistrationConfigInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.registrationConfigInput"></a>

```csharp
public IResolvable|IotCaCertificateRegistrationConfig RegistrationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---

##### `RemoveAutoRegistrationInput`<sup>Optional</sup> <a name="RemoveAutoRegistrationInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistrationInput"></a>

```csharp
public bool|IResolvable RemoveAutoRegistrationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tagsInput"></a>

```csharp
public IResolvable|IotCaCertificateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

---

##### `VerificationCertificatePemInput`<sup>Optional</sup> <a name="VerificationCertificatePemInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePemInput"></a>

```csharp
public string VerificationCertificatePemInput { get; }
```

- *Type:* string

---

##### `AutoRegistrationStatus`<sup>Required</sup> <a name="AutoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.autoRegistrationStatus"></a>

```csharp
public string AutoRegistrationStatus { get; }
```

- *Type:* string

---

##### `CaCertificatePem`<sup>Required</sup> <a name="CaCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.caCertificatePem"></a>

```csharp
public string CaCertificatePem { get; }
```

- *Type:* string

---

##### `CertificateMode`<sup>Required</sup> <a name="CertificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.certificateMode"></a>

```csharp
public string CertificateMode { get; }
```

- *Type:* string

---

##### `RemoveAutoRegistration`<sup>Required</sup> <a name="RemoveAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.removeAutoRegistration"></a>

```csharp
public bool|IResolvable RemoveAutoRegistration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VerificationCertificatePem`<sup>Required</sup> <a name="VerificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.verificationCertificatePem"></a>

```csharp
public string VerificationCertificatePem { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotCaCertificateConfig <a name="IotCaCertificateConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CaCertificatePem,
    string Status,
    string AutoRegistrationStatus = null,
    string CertificateMode = null,
    IotCaCertificateRegistrationConfig RegistrationConfig = null,
    bool|IResolvable RemoveAutoRegistration = null,
    IResolvable|IotCaCertificateTags[] Tags = null,
    string VerificationCertificatePem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem">CaCertificatePem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus">AutoRegistrationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode">CertificateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig">RegistrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration">RemoveAutoRegistration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem">VerificationCertificatePem</a></code> | <code>string</code> | The private key verification certificate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaCertificatePem`<sup>Required</sup> <a name="CaCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.caCertificatePem"></a>

```csharp
public string CaCertificatePem { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#ca_certificate_pem IotCaCertificate#ca_certificate_pem}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#status IotCaCertificate#status}.

---

##### `AutoRegistrationStatus`<sup>Optional</sup> <a name="AutoRegistrationStatus" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.autoRegistrationStatus"></a>

```csharp
public string AutoRegistrationStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#auto_registration_status IotCaCertificate#auto_registration_status}.

---

##### `CertificateMode`<sup>Optional</sup> <a name="CertificateMode" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.certificateMode"></a>

```csharp
public string CertificateMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#certificate_mode IotCaCertificate#certificate_mode}.

---

##### `RegistrationConfig`<sup>Optional</sup> <a name="RegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.registrationConfig"></a>

```csharp
public IotCaCertificateRegistrationConfig RegistrationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#registration_config IotCaCertificate#registration_config}.

---

##### `RemoveAutoRegistration`<sup>Optional</sup> <a name="RemoveAutoRegistration" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.removeAutoRegistration"></a>

```csharp
public bool|IResolvable RemoveAutoRegistration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#remove_auto_registration IotCaCertificate#remove_auto_registration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.tags"></a>

```csharp
public IResolvable|IotCaCertificateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#tags IotCaCertificate#tags}

---

##### `VerificationCertificatePem`<sup>Optional</sup> <a name="VerificationCertificatePem" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateConfig.property.verificationCertificatePem"></a>

```csharp
public string VerificationCertificatePem { get; set; }
```

- *Type:* string

The private key verification certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#verification_certificate_pem IotCaCertificate#verification_certificate_pem}

---

### IotCaCertificateRegistrationConfig <a name="IotCaCertificateRegistrationConfig" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificateRegistrationConfig {
    string RoleArn = null,
    string TemplateBody = null,
    string TemplateName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody">TemplateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName">TemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#role_arn IotCaCertificate#role_arn}.

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateBody"></a>

```csharp
public string TemplateBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_body IotCaCertificate#template_body}.

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#template_name IotCaCertificate#template_name}.

---

### IotCaCertificateTags <a name="IotCaCertificateTags" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#key IotCaCertificate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_ca_certificate#value IotCaCertificate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotCaCertificateRegistrationConfigOutputReference <a name="IotCaCertificateRegistrationConfigOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificateRegistrationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName">ResetTemplateName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateBody"></a>

```csharp
private void ResetTemplateBody()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput">TemplateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody">TemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBodyInput"></a>

```csharp
public string TemplateBodyInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateBody"></a>

```csharp
public string TemplateBody { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCaCertificateRegistrationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateRegistrationConfig">IotCaCertificateRegistrationConfig</a>

---


### IotCaCertificateTagsList <a name="IotCaCertificateTagsList" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get"></a>

```csharp
private IotCaCertificateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotCaCertificateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>[]

---


### IotCaCertificateTagsOutputReference <a name="IotCaCertificateTagsOutputReference" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotCaCertificateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotCaCertificateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotCaCertificate.IotCaCertificateTags">IotCaCertificateTags</a>

---



