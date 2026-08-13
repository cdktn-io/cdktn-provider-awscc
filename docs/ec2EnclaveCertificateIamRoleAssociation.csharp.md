# `ec2EnclaveCertificateIamRoleAssociation` Submodule <a name="`ec2EnclaveCertificateIamRoleAssociation` Submodule" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EnclaveCertificateIamRoleAssociation <a name="Ec2EnclaveCertificateIamRoleAssociation" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2EnclaveCertificateIamRoleAssociation(Construct Scope, string Id, Ec2EnclaveCertificateIamRoleAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig">Ec2EnclaveCertificateIamRoleAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig">Ec2EnclaveCertificateIamRoleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2EnclaveCertificateIamRoleAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2EnclaveCertificateIamRoleAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2EnclaveCertificateIamRoleAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2EnclaveCertificateIamRoleAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2EnclaveCertificateIamRoleAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2EnclaveCertificateIamRoleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2EnclaveCertificateIamRoleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3BucketName">CertificateS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3ObjectKey">CertificateS3ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.encryptionKmsKeyId">EncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CertificateS3BucketName`<sup>Required</sup> <a name="CertificateS3BucketName" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3BucketName"></a>

```csharp
public string CertificateS3BucketName { get; }
```

- *Type:* string

---

##### `CertificateS3ObjectKey`<sup>Required</sup> <a name="CertificateS3ObjectKey" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3ObjectKey"></a>

```csharp
public string CertificateS3ObjectKey { get; }
```

- *Type:* string

---

##### `EncryptionKmsKeyId`<sup>Required</sup> <a name="EncryptionKmsKeyId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.encryptionKmsKeyId"></a>

```csharp
public string EncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EnclaveCertificateIamRoleAssociationConfig <a name="Ec2EnclaveCertificateIamRoleAssociationConfig" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2EnclaveCertificateIamRoleAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CertificateArn,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association#certificate_arn Ec2EnclaveCertificateIamRoleAssociation#certificate_arn}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate.

You can associate up to 16 IAM roles with an ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association#role_arn Ec2EnclaveCertificateIamRoleAssociation#role_arn}

---



