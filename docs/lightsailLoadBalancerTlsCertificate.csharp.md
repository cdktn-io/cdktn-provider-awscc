# `lightsailLoadBalancerTlsCertificate` Submodule <a name="`lightsailLoadBalancerTlsCertificate` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancerTlsCertificate <a name="LightsailLoadBalancerTlsCertificate" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailLoadBalancerTlsCertificate(Construct Scope, string Id, LightsailLoadBalancerTlsCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig">LightsailLoadBalancerTlsCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig">LightsailLoadBalancerTlsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames">ResetCertificateAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled">ResetHttpsRedirectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached">ResetIsAttached</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCertificateAlternativeNames` <a name="ResetCertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames"></a>

```csharp
private void ResetCertificateAlternativeNames()
```

##### `ResetHttpsRedirectionEnabled` <a name="ResetHttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled"></a>

```csharp
private void ResetHttpsRedirectionEnabled()
```

##### `ResetIsAttached` <a name="ResetIsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached"></a>

```csharp
private void ResetIsAttached()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailLoadBalancerTlsCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailLoadBalancerTlsCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailLoadBalancerTlsCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailLoadBalancerTlsCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailLoadBalancerTlsCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailLoadBalancerTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancerTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn">LoadBalancerTlsCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput">CertificateAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput">CertificateDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput">HttpsRedirectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput">IsAttachedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames">CertificateAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName">CertificateDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled">HttpsRedirectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached">IsAttached</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerTlsCertificateArn`<sup>Required</sup> <a name="LoadBalancerTlsCertificateArn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn"></a>

```csharp
public string LoadBalancerTlsCertificateArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CertificateAlternativeNamesInput`<sup>Optional</sup> <a name="CertificateAlternativeNamesInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput"></a>

```csharp
public string[] CertificateAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `CertificateDomainNameInput`<sup>Optional</sup> <a name="CertificateDomainNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput"></a>

```csharp
public string CertificateDomainNameInput { get; }
```

- *Type:* string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `HttpsRedirectionEnabledInput`<sup>Optional</sup> <a name="HttpsRedirectionEnabledInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput"></a>

```csharp
public bool|IResolvable HttpsRedirectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsAttachedInput`<sup>Optional</sup> <a name="IsAttachedInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput"></a>

```csharp
public bool|IResolvable IsAttachedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput"></a>

```csharp
public string LoadBalancerNameInput { get; }
```

- *Type:* string

---

##### `CertificateAlternativeNames`<sup>Required</sup> <a name="CertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames"></a>

```csharp
public string[] CertificateAlternativeNames { get; }
```

- *Type:* string[]

---

##### `CertificateDomainName`<sup>Required</sup> <a name="CertificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName"></a>

```csharp
public string CertificateDomainName { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `HttpsRedirectionEnabled`<sup>Required</sup> <a name="HttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled"></a>

```csharp
public bool|IResolvable HttpsRedirectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsAttached`<sup>Required</sup> <a name="IsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached"></a>

```csharp
public bool|IResolvable IsAttached { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerTlsCertificateConfig <a name="LightsailLoadBalancerTlsCertificateConfig" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailLoadBalancerTlsCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CertificateDomainName,
    string CertificateName,
    string LoadBalancerName,
    string[] CertificateAlternativeNames = null,
    bool|IResolvable HttpsRedirectionEnabled = null,
    bool|IResolvable IsAttached = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName">CertificateDomainName</a></code> | <code>string</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName">CertificateName</a></code> | <code>string</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>string</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames">CertificateAlternativeNames</a></code> | <code>string[]</code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled">HttpsRedirectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached">IsAttached</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CertificateDomainName`<sup>Required</sup> <a name="CertificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName"></a>

```csharp
public string CertificateDomainName { get; set; }
```

- *Type:* string

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName"></a>

```csharp
public string LoadBalancerName { get; set; }
```

- *Type:* string

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `CertificateAlternativeNames`<sup>Optional</sup> <a name="CertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames"></a>

```csharp
public string[] CertificateAlternativeNames { get; set; }
```

- *Type:* string[]

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `HttpsRedirectionEnabled`<sup>Optional</sup> <a name="HttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled"></a>

```csharp
public bool|IResolvable HttpsRedirectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `IsAttached`<sup>Optional</sup> <a name="IsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached"></a>

```csharp
public bool|IResolvable IsAttached { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---



