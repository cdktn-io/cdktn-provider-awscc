# `certificatemanagerAcmeEndpoint` Submodule <a name="`certificatemanagerAcmeEndpoint` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeEndpoint <a name="CertificatemanagerAcmeEndpoint" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpoint(Construct Scope, string Id, CertificatemanagerAcmeEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig">CertificatemanagerAcmeEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig">CertificatemanagerAcmeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority">PutCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags">PutCertificateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags">ResetCertificateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact">ResetContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateAuthority` <a name="PutCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority"></a>

```csharp
private void PutCertificateAuthority(CertificatemanagerAcmeEndpointCertificateAuthority Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---

##### `PutCertificateTags` <a name="PutCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags"></a>

```csharp
private void PutCertificateTags(IResolvable|CertificatemanagerAcmeEndpointCertificateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags"></a>

```csharp
private void PutTags(IResolvable|CertificatemanagerAcmeEndpointTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

---

##### `ResetCertificateTags` <a name="ResetCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags"></a>

```csharp
private void ResetCertificateTags()
```

##### `ResetContact` <a name="ResetContact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact"></a>

```csharp
private void ResetContact()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatemanagerAcmeEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatemanagerAcmeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags">CertificateTags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput">AuthorizationBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput">CertificateAuthorityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput">CertificateTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput">ContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior">AuthorizationBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact">Contact</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn"></a>

```csharp
public string AcmeEndpointArn { get; }
```

- *Type:* string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority"></a>

```csharp
public CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference CertificateAuthority { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a>

---

##### `CertificateTags`<sup>Required</sup> <a name="CertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags"></a>

```csharp
public CertificatemanagerAcmeEndpointCertificateTagsList CertificateTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a>

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags"></a>

```csharp
public CertificatemanagerAcmeEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a>

---

##### `AuthorizationBehaviorInput`<sup>Optional</sup> <a name="AuthorizationBehaviorInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput"></a>

```csharp
public string AuthorizationBehaviorInput { get; }
```

- *Type:* string

---

##### `CertificateAuthorityInput`<sup>Optional</sup> <a name="CertificateAuthorityInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateAuthority CertificateAuthorityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---

##### `CertificateTagsInput`<sup>Optional</sup> <a name="CertificateTagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateTags[] CertificateTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

---

##### `ContactInput`<sup>Optional</sup> <a name="ContactInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput"></a>

```csharp
public string ContactInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

---

##### `AuthorizationBehavior`<sup>Required</sup> <a name="AuthorizationBehavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior"></a>

```csharp
public string AuthorizationBehavior { get; }
```

- *Type:* string

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact"></a>

```csharp
public string Contact { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeEndpointCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateAuthority {
    CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority PublicCertificateAuthority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority">PublicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | Configuration for the public certificate authority. |

---

##### `PublicCertificateAuthority`<sup>Required</sup> <a name="PublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority"></a>

```csharp
public CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority PublicCertificateAuthority { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

Configuration for the public certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#public_certificate_authority CertificatemanagerAcmeEndpoint#public_certificate_authority}

---

### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority {
    string[] AllowedKeyAlgorithms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms">AllowedKeyAlgorithms</a></code> | <code>string[]</code> | The allowed key algorithms for certificates issued via this endpoint. |

---

##### `AllowedKeyAlgorithms`<sup>Optional</sup> <a name="AllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms"></a>

```csharp
public string[] AllowedKeyAlgorithms { get; set; }
```

- *Type:* string[]

The allowed key algorithms for certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#allowed_key_algorithms CertificatemanagerAcmeEndpoint#allowed_key_algorithms}

---

### CertificatemanagerAcmeEndpointCertificateTags <a name="CertificatemanagerAcmeEndpointCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

### CertificatemanagerAcmeEndpointConfig <a name="CertificatemanagerAcmeEndpointConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthorizationBehavior,
    CertificatemanagerAcmeEndpointCertificateAuthority CertificateAuthority,
    IResolvable|CertificatemanagerAcmeEndpointCertificateTags[] CertificateTags = null,
    string Contact = null,
    IResolvable|CertificatemanagerAcmeEndpointTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior">AuthorizationBehavior</a></code> | <code>string</code> | The authorization behavior for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | The certificate authority configuration for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags">CertificateTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]</code> | Tags applied to certificates issued via this endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact">Contact</a></code> | <code>string</code> | Whether contact information is required for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]</code> | Tags associated with the ACME endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthorizationBehavior`<sup>Required</sup> <a name="AuthorizationBehavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior"></a>

```csharp
public string AuthorizationBehavior { get; set; }
```

- *Type:* string

The authorization behavior for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#authorization_behavior CertificatemanagerAcmeEndpoint#authorization_behavior}

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority"></a>

```csharp
public CertificatemanagerAcmeEndpointCertificateAuthority CertificateAuthority { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

The certificate authority configuration for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#certificate_authority CertificatemanagerAcmeEndpoint#certificate_authority}

---

##### `CertificateTags`<sup>Optional</sup> <a name="CertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateTags[] CertificateTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

Tags applied to certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#certificate_tags CertificatemanagerAcmeEndpoint#certificate_tags}

---

##### `Contact`<sup>Optional</sup> <a name="Contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact"></a>

```csharp
public string Contact { get; set; }
```

- *Type:* string

Whether contact information is required for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#contact CertificatemanagerAcmeEndpoint#contact}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

Tags associated with the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#tags CertificatemanagerAcmeEndpoint#tags}

---

### CertificatemanagerAcmeEndpointTags <a name="CertificatemanagerAcmeEndpointTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority">PutPublicCertificateAuthority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicCertificateAuthority` <a name="PutPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority"></a>

```csharp
private void PutPublicCertificateAuthority(CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority">PublicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput">PublicCertificateAuthorityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicCertificateAuthority`<sup>Required</sup> <a name="PublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority"></a>

```csharp
public CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference PublicCertificateAuthority { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a>

---

##### `PublicCertificateAuthorityInput`<sup>Optional</sup> <a name="PublicCertificateAuthorityInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority PublicCertificateAuthorityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateAuthority InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---


### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms">ResetAllowedKeyAlgorithms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedKeyAlgorithms` <a name="ResetAllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms"></a>

```csharp
private void ResetAllowedKeyAlgorithms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput">AllowedKeyAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms">AllowedKeyAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedKeyAlgorithmsInput`<sup>Optional</sup> <a name="AllowedKeyAlgorithmsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput"></a>

```csharp
public string[] AllowedKeyAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `AllowedKeyAlgorithms`<sup>Required</sup> <a name="AllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms"></a>

```csharp
public string[] AllowedKeyAlgorithms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


### CertificatemanagerAcmeEndpointCertificateTagsList <a name="CertificatemanagerAcmeEndpointCertificateTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get"></a>

```csharp
private CertificatemanagerAcmeEndpointCertificateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>[]

---


### CertificatemanagerAcmeEndpointCertificateTagsOutputReference <a name="CertificatemanagerAcmeEndpointCertificateTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointCertificateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointCertificateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags">CertificatemanagerAcmeEndpointCertificateTags</a>

---


### CertificatemanagerAcmeEndpointTagsList <a name="CertificatemanagerAcmeEndpointTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get"></a>

```csharp
private CertificatemanagerAcmeEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>[]

---


### CertificatemanagerAcmeEndpointTagsOutputReference <a name="CertificatemanagerAcmeEndpointTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeEndpointTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags">CertificatemanagerAcmeEndpointTags</a>

---



