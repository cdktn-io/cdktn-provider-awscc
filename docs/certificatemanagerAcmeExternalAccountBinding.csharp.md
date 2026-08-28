# `certificatemanagerAcmeExternalAccountBinding` Submodule <a name="`certificatemanagerAcmeExternalAccountBinding` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeExternalAccountBinding <a name="CertificatemanagerAcmeExternalAccountBinding" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding awscc_certificatemanager_acme_external_account_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBinding(Construct Scope, string Id, CertificatemanagerAcmeExternalAccountBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig">CertificatemanagerAcmeExternalAccountBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig">CertificatemanagerAcmeExternalAccountBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpiration` <a name="PutExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration"></a>

```csharp
private void PutExpiration(CertificatemanagerAcmeExternalAccountBindingExpiration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags"></a>

```csharp
private void PutTags(IResolvable|CertificatemanagerAcmeExternalAccountBindingTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeExternalAccountBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeExternalAccountBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeExternalAccountBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CertificatemanagerAcmeExternalAccountBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatemanagerAcmeExternalAccountBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatemanagerAcmeExternalAccountBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeExternalAccountBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn">AcmeExternalAccountBindingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput">AcmeEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput">ExpirationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcmeExternalAccountBindingArn`<sup>Required</sup> <a name="AcmeExternalAccountBindingArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn"></a>

```csharp
public string AcmeExternalAccountBindingArn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration"></a>

```csharp
public CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference Expiration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags"></a>

```csharp
public CertificatemanagerAcmeExternalAccountBindingTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a>

---

##### `AcmeEndpointArnInput`<sup>Optional</sup> <a name="AcmeEndpointArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput"></a>

```csharp
public string AcmeEndpointArnInput { get; }
```

- *Type:* string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput"></a>

```csharp
public IResolvable|CertificatemanagerAcmeExternalAccountBindingExpiration ExpirationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput"></a>

```csharp
public IResolvable|CertificatemanagerAcmeExternalAccountBindingTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn"></a>

```csharp
public string AcmeEndpointArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeExternalAccountBindingConfig <a name="CertificatemanagerAcmeExternalAccountBindingConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AcmeEndpointArn,
    string RoleArn,
    CertificatemanagerAcmeExternalAccountBindingExpiration Expiration = null,
    IResolvable|CertificatemanagerAcmeExternalAccountBindingTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>string</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]</code> | Tags associated with the external account binding. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn"></a>

```csharp
public string AcmeEndpointArn { get; set; }
```

- *Type:* string

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration"></a>

```csharp
public CertificatemanagerAcmeExternalAccountBindingExpiration Expiration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags"></a>

```csharp
public IResolvable|CertificatemanagerAcmeExternalAccountBindingTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

### CertificatemanagerAcmeExternalAccountBindingExpiration <a name="CertificatemanagerAcmeExternalAccountBindingExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBindingExpiration {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type">Type</a></code> | <code>string</code> | The time unit for the expiration value. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value">Value</a></code> | <code>double</code> | The expiration value. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The time unit for the expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#type CertificatemanagerAcmeExternalAccountBinding#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

### CertificatemanagerAcmeExternalAccountBindingTags <a name="CertificatemanagerAcmeExternalAccountBindingTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBindingTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#key CertificatemanagerAcmeExternalAccountBinding#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeExternalAccountBindingExpiration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---


### CertificatemanagerAcmeExternalAccountBindingTagsList <a name="CertificatemanagerAcmeExternalAccountBindingTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBindingTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get"></a>

```csharp
private CertificatemanagerAcmeExternalAccountBindingTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeExternalAccountBindingTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>[]

---


### CertificatemanagerAcmeExternalAccountBindingTagsOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CertificatemanagerAcmeExternalAccountBindingTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CertificatemanagerAcmeExternalAccountBindingTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags">CertificatemanagerAcmeExternalAccountBindingTags</a>

---



