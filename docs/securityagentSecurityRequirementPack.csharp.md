# `securityagentSecurityRequirementPack` Submodule <a name="`securityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentSecurityRequirementPack <a name="SecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPack(Construct Scope, string Id, SecurityagentSecurityRequirementPackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig">SecurityagentSecurityRequirementPackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig">SecurityagentSecurityRequirementPackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements">PutSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements">ResetSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecurityRequirements` <a name="PutSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements"></a>

```csharp
private void PutSecurityRequirements(IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags"></a>

```csharp
private void PutTags(IResolvable|SecurityagentSecurityRequirementPackTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSecurityRequirements` <a name="ResetSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements"></a>

```csharp
private void ResetSecurityRequirements()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentSecurityRequirementPack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentSecurityRequirementPack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentSecurityRequirementPack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentSecurityRequirementPack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentSecurityRequirementPack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId">PackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements">SecurityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput">SecurityRequirementsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PackId`<sup>Required</sup> <a name="PackId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId"></a>

```csharp
public string PackId { get; }
```

- *Type:* string

---

##### `SecurityRequirements`<sup>Required</sup> <a name="SecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```csharp
public SecurityagentSecurityRequirementPackSecurityRequirementsList SecurityRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags"></a>

```csharp
public SecurityagentSecurityRequirementPackTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecurityRequirementsInput`<sup>Optional</sup> <a name="SecurityRequirementsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements[] SecurityRequirementsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentSecurityRequirementPackConfig <a name="SecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    string KmsKeyId = null,
    IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements[] SecurityRequirements = null,
    string Status = null,
    IResolvable|SecurityagentSecurityRequirementPackTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name">Name</a></code> | <code>string</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description">Description</a></code> | <code>string</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements">SecurityRequirements</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]</code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status">Status</a></code> | <code>string</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]</code> | Tags for the security requirement pack. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `SecurityRequirements`<sup>Optional</sup> <a name="SecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements[] SecurityRequirements { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

### SecurityagentSecurityRequirementPackSecurityRequirements <a name="SecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackSecurityRequirements {
    string Description = null,
    string Domain = null,
    string Evaluation = null,
    string Name = null,
    string Remediation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description">Description</a></code> | <code>string</code> | Description of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain">Domain</a></code> | <code>string</code> | Security domain this requirement belongs to. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation">Evaluation</a></code> | <code>string</code> | How to evaluate compliance with this requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name">Name</a></code> | <code>string</code> | Name of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation">Remediation</a></code> | <code>string</code> | How to remediate non-compliance. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Security domain this requirement belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#domain SecurityagentSecurityRequirementPack#domain}

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation"></a>

```csharp
public string Evaluation { get; set; }
```

- *Type:* string

How to evaluate compliance with this requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#evaluation SecurityagentSecurityRequirementPack#evaluation}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `Remediation`<sup>Optional</sup> <a name="Remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation"></a>

```csharp
public string Remediation { get; set; }
```

- *Type:* string

How to remediate non-compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#remediation SecurityagentSecurityRequirementPack#remediation}

---

### SecurityagentSecurityRequirementPackTags <a name="SecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#key SecurityagentSecurityRequirementPack#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#value SecurityagentSecurityRequirementPack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentSecurityRequirementPackSecurityRequirementsList <a name="SecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackSecurityRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```csharp
private SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>[]

---


### SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation">ResetRemediation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation"></a>

```csharp
private void ResetEvaluation()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRemediation` <a name="ResetRemediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation"></a>

```csharp
private void ResetRemediation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput">EvaluationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput">RemediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">Evaluation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">Remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput"></a>

```csharp
public string EvaluationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemediationInput`<sup>Optional</sup> <a name="RemediationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput"></a>

```csharp
public string RemediationInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```csharp
public string Evaluation { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```csharp
public string Remediation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### SecurityagentSecurityRequirementPackTagsList <a name="SecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get"></a>

```csharp
private SecurityagentSecurityRequirementPackTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>[]

---


### SecurityagentSecurityRequirementPackTagsOutputReference <a name="SecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentSecurityRequirementPackTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentSecurityRequirementPackTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>

---



