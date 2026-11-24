# `ec2FcaPolicy` Submodule <a name="`ec2FcaPolicy` Submodule" id="@cdktn/provider-awscc.ec2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FcaPolicy <a name="Ec2FcaPolicy" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicy(Construct Scope, string Id, Ec2FcaPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig">Ec2FcaPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig">Ec2FcaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument">PutInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument">PutNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument">PutPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument">ResetInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument">ResetNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument">ResetPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled">ResetShowBackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceFcaPolicyDocument` <a name="PutInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument"></a>

```csharp
private void PutInstanceFcaPolicyDocument(Ec2FcaPolicyInstanceFcaPolicyDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `PutNatFcaPolicyDocument` <a name="PutNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument"></a>

```csharp
private void PutNatFcaPolicyDocument(Ec2FcaPolicyNatFcaPolicyDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `PutPcxFcaPolicyDocument` <a name="PutPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument"></a>

```csharp
private void PutPcxFcaPolicyDocument(Ec2FcaPolicyPcxFcaPolicyDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2FcaPolicyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInstanceFcaPolicyDocument` <a name="ResetInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument"></a>

```csharp
private void ResetInstanceFcaPolicyDocument()
```

##### `ResetNatFcaPolicyDocument` <a name="ResetNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument"></a>

```csharp
private void ResetNatFcaPolicyDocument()
```

##### `ResetPcxFcaPolicyDocument` <a name="ResetPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument"></a>

```csharp
private void ResetPcxFcaPolicyDocument()
```

##### `ResetShowBackEnabled` <a name="ResetShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled"></a>

```csharp
private void ResetShowBackEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2FcaPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2FcaPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2FcaPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2FcaPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2FcaPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId">FcaPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument">InstanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument">NatFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument">PcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt">PolicyCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt">VersionExpectedEffectiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput">InstanceFcaPolicyDocumentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput">NatFcaPolicyDocumentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput">NetworkResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput">PcxFcaPolicyDocumentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput">ShowBackEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType">NetworkResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled">ShowBackEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FcaPolicyId`<sup>Required</sup> <a name="FcaPolicyId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId"></a>

```csharp
public string FcaPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceFcaPolicyDocument`<sup>Required</sup> <a name="InstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```csharp
public Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference InstanceFcaPolicyDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `NatFcaPolicyDocument`<sup>Required</sup> <a name="NatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument"></a>

```csharp
public Ec2FcaPolicyNatFcaPolicyDocumentOutputReference NatFcaPolicyDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; }
```

- *Type:* string

---

##### `PcxFcaPolicyDocument`<sup>Required</sup> <a name="PcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```csharp
public Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference PcxFcaPolicyDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `PolicyCreatedAt`<sup>Required</sup> <a name="PolicyCreatedAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt"></a>

```csharp
public string PolicyCreatedAt { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags"></a>

```csharp
public Ec2FcaPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a>

---

##### `VersionExpectedEffectiveAt`<sup>Required</sup> <a name="VersionExpectedEffectiveAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```csharp
public string VersionExpectedEffectiveAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceFcaPolicyDocumentInput`<sup>Optional</sup> <a name="InstanceFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocument InstanceFcaPolicyDocumentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `NatFcaPolicyDocumentInput`<sup>Optional</sup> <a name="NatFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocument NatFcaPolicyDocumentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `NetworkResourceTypeInput`<sup>Optional</sup> <a name="NetworkResourceTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput"></a>

```csharp
public string NetworkResourceTypeInput { get; }
```

- *Type:* string

---

##### `PcxFcaPolicyDocumentInput`<sup>Optional</sup> <a name="PcxFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocument PcxFcaPolicyDocumentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `ShowBackEnabledInput`<sup>Optional</sup> <a name="ShowBackEnabledInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput"></a>

```csharp
public bool|IResolvable ShowBackEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NetworkResourceType`<sup>Required</sup> <a name="NetworkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType"></a>

```csharp
public string NetworkResourceType { get; }
```

- *Type:* string

---

##### `ShowBackEnabled`<sup>Required</sup> <a name="ShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled"></a>

```csharp
public bool|IResolvable ShowBackEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FcaPolicyConfig <a name="Ec2FcaPolicyConfig" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NetworkResourceType,
    string Description = null,
    Ec2FcaPolicyInstanceFcaPolicyDocument InstanceFcaPolicyDocument = null,
    Ec2FcaPolicyNatFcaPolicyDocument NatFcaPolicyDocument = null,
    Ec2FcaPolicyPcxFcaPolicyDocument PcxFcaPolicyDocument = null,
    bool|IResolvable ShowBackEnabled = null,
    IResolvable|Ec2FcaPolicyTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType">NetworkResourceType</a></code> | <code>string</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description">Description</a></code> | <code>string</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument">InstanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument">NatFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument">PcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled">ShowBackEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]</code> | The tags for the FCA policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NetworkResourceType`<sup>Required</sup> <a name="NetworkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType"></a>

```csharp
public string NetworkResourceType { get; set; }
```

- *Type:* string

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `InstanceFcaPolicyDocument`<sup>Optional</sup> <a name="InstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument"></a>

```csharp
public Ec2FcaPolicyInstanceFcaPolicyDocument InstanceFcaPolicyDocument { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `NatFcaPolicyDocument`<sup>Optional</sup> <a name="NatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument"></a>

```csharp
public Ec2FcaPolicyNatFcaPolicyDocument NatFcaPolicyDocument { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `PcxFcaPolicyDocument`<sup>Optional</sup> <a name="PcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument"></a>

```csharp
public Ec2FcaPolicyPcxFcaPolicyDocument PcxFcaPolicyDocument { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `ShowBackEnabled`<sup>Optional</sup> <a name="ShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled"></a>

```csharp
public bool|IResolvable ShowBackEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags"></a>

```csharp
public IResolvable|Ec2FcaPolicyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

### Ec2FcaPolicyInstanceFcaPolicyDocument <a name="Ec2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocument {
    Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecifications = null,
    string[] Dimensions = null,
    string[] ReportingGranularity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions">Dimensions</a></code> | <code>string[]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `CidrRangeSpecifications`<sup>Optional</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```csharp
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions"></a>

```csharp
public string[] Dimensions { get; set; }
```

- *Type:* string[]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `ReportingGranularity`<sup>Optional</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; set; }
```

- *Type:* string[]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications {
    IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Prefixes = null,
    string PrefixesType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">Prefixes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">PrefixesType</a></code> | <code>string</code> | The type of prefixes the mappings apply to. |

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Prefixes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `PrefixesType`<sup>Optional</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```csharp
public string PrefixesType { get; set; }
```

- *Type:* string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
    string CidrLabel = null,
    string CidrRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">CidrRange</a></code> | <code>string</code> | The CIDR range. |

---

##### `CidrLabel`<sup>Optional</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; set; }
```

- *Type:* string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `CidrRange`<sup>Optional</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```csharp
public string CidrRange { get; set; }
```

- *Type:* string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyNatFcaPolicyDocument <a name="Ec2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocument {
    Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecifications = null,
    string[] Dimensions = null,
    string[] ReportingGranularity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions">Dimensions</a></code> | <code>string[]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `CidrRangeSpecifications`<sup>Optional</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```csharp
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions"></a>

```csharp
public string[] Dimensions { get; set; }
```

- *Type:* string[]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `ReportingGranularity`<sup>Optional</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; set; }
```

- *Type:* string[]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications {
    IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Prefixes = null,
    string PrefixesType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">Prefixes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">PrefixesType</a></code> | <code>string</code> | The type of prefixes the mappings apply to. |

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Prefixes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `PrefixesType`<sup>Optional</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```csharp
public string PrefixesType { get; set; }
```

- *Type:* string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
    string CidrLabel = null,
    string CidrRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">CidrRange</a></code> | <code>string</code> | The CIDR range. |

---

##### `CidrLabel`<sup>Optional</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; set; }
```

- *Type:* string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `CidrRange`<sup>Optional</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```csharp
public string CidrRange { get; set; }
```

- *Type:* string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyPcxFcaPolicyDocument <a name="Ec2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocument {
    Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecifications = null,
    string[] Dimensions = null,
    string[] ReportingGranularity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions">Dimensions</a></code> | <code>string[]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `CidrRangeSpecifications`<sup>Optional</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```csharp
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions"></a>

```csharp
public string[] Dimensions { get; set; }
```

- *Type:* string[]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `ReportingGranularity`<sup>Optional</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; set; }
```

- *Type:* string[]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications {
    IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Prefixes = null,
    string PrefixesType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">Prefixes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">PrefixesType</a></code> | <code>string</code> | The type of prefixes the mappings apply to. |

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Prefixes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `PrefixesType`<sup>Optional</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```csharp
public string PrefixesType { get; set; }
```

- *Type:* string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
    string CidrLabel = null,
    string CidrRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">CidrRange</a></code> | <code>string</code> | The CIDR range. |

---

##### `CidrLabel`<sup>Optional</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; set; }
```

- *Type:* string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `CidrRange`<sup>Optional</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```csharp
public string CidrRange { get; set; }
```

- *Type:* string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyTags <a name="Ec2FcaPolicyTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">PutPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">ResetPrefixesType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixes` <a name="PutPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```csharp
private void PutPrefixes(IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```csharp
private void ResetPrefixes()
```

##### `ResetPrefixesType` <a name="ResetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```csharp
private void ResetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">PrefixesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```csharp
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList Prefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] PrefixesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `PrefixesTypeInput`<sup>Optional</sup> <a name="PrefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```csharp
public string PrefixesTypeInput { get; }
```

- *Type:* string

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```csharp
public string PrefixesType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```csharp
private Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">ResetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">ResetCidrRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrLabel` <a name="ResetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```csharp
private void ResetCidrLabel()
```

##### `ResetCidrRange` <a name="ResetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```csharp
private void ResetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">CidrLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">CidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrLabelInput`<sup>Optional</sup> <a name="CidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```csharp
public string CidrLabelInput { get; }
```

- *Type:* string

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```csharp
public string CidrRangeInput { get; }
```

- *Type:* string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">PutCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">ResetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity">ResetReportingGranularity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrRangeSpecifications` <a name="PutCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```csharp
private void PutCidrRangeSpecifications(Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `ResetCidrRangeSpecifications` <a name="ResetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```csharp
private void ResetCidrRangeSpecifications()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetReportingGranularity` <a name="ResetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```csharp
private void ResetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">CidrRangeSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput">ReportingGranularityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```csharp
public Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference CidrRangeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `CidrRangeSpecificationsInput`<sup>Optional</sup> <a name="CidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```csharp
public string[] DimensionsInput { get; }
```

- *Type:* string[]

---

##### `ReportingGranularityInput`<sup>Optional</sup> <a name="ReportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```csharp
public string[] ReportingGranularityInput { get; }
```

- *Type:* string[]

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyInstanceFcaPolicyDocument InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">PutPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">ResetPrefixesType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixes` <a name="PutPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```csharp
private void PutPrefixes(IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```csharp
private void ResetPrefixes()
```

##### `ResetPrefixesType` <a name="ResetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```csharp
private void ResetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">PrefixesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```csharp
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList Prefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] PrefixesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `PrefixesTypeInput`<sup>Optional</sup> <a name="PrefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```csharp
public string PrefixesTypeInput { get; }
```

- *Type:* string

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```csharp
public string PrefixesType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```csharp
private Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">ResetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">ResetCidrRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrLabel` <a name="ResetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```csharp
private void ResetCidrLabel()
```

##### `ResetCidrRange` <a name="ResetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```csharp
private void ResetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">CidrLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">CidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrLabelInput`<sup>Optional</sup> <a name="CidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```csharp
public string CidrLabelInput { get; }
```

- *Type:* string

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```csharp
public string CidrRangeInput { get; }
```

- *Type:* string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyNatFcaPolicyDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">PutCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">ResetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity">ResetReportingGranularity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrRangeSpecifications` <a name="PutCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```csharp
private void PutCidrRangeSpecifications(Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `ResetCidrRangeSpecifications` <a name="ResetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```csharp
private void ResetCidrRangeSpecifications()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetReportingGranularity` <a name="ResetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```csharp
private void ResetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">CidrRangeSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput">ReportingGranularityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```csharp
public Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference CidrRangeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `CidrRangeSpecificationsInput`<sup>Optional</sup> <a name="CidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```csharp
public string[] DimensionsInput { get; }
```

- *Type:* string[]

---

##### `ReportingGranularityInput`<sup>Optional</sup> <a name="ReportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```csharp
public string[] ReportingGranularityInput { get; }
```

- *Type:* string[]

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyNatFcaPolicyDocument InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">PutPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">ResetPrefixesType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixes` <a name="PutPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```csharp
private void PutPrefixes(IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```csharp
private void ResetPrefixes()
```

##### `ResetPrefixesType` <a name="ResetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```csharp
private void ResetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">PrefixesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```csharp
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList Prefixes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] PrefixesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---

##### `PrefixesTypeInput`<sup>Optional</sup> <a name="PrefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```csharp
public string PrefixesTypeInput { get; }
```

- *Type:* string

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```csharp
public string PrefixesType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```csharp
private Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>[]

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">ResetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">ResetCidrRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrLabel` <a name="ResetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```csharp
private void ResetCidrLabel()
```

##### `ResetCidrRange` <a name="ResetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```csharp
private void ResetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">CidrLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">CidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrLabelInput`<sup>Optional</sup> <a name="CidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```csharp
public string CidrLabelInput { get; }
```

- *Type:* string

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```csharp
public string CidrRangeInput { get; }
```

- *Type:* string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```csharp
public string CidrLabel { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">PutCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">ResetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity">ResetReportingGranularity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrRangeSpecifications` <a name="PutCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```csharp
private void PutCidrRangeSpecifications(Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `ResetCidrRangeSpecifications` <a name="ResetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```csharp
private void ResetCidrRangeSpecifications()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetReportingGranularity` <a name="ResetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```csharp
private void ResetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">CidrRangeSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput">ReportingGranularityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```csharp
public Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference CidrRangeSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `CidrRangeSpecificationsInput`<sup>Optional</sup> <a name="CidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications CidrRangeSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```csharp
public string[] DimensionsInput { get; }
```

- *Type:* string[]

---

##### `ReportingGranularityInput`<sup>Optional</sup> <a name="ReportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```csharp
public string[] ReportingGranularityInput { get; }
```

- *Type:* string[]

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```csharp
public string[] Dimensions { get; }
```

- *Type:* string[]

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```csharp
public string[] ReportingGranularity { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyPcxFcaPolicyDocument InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---


### Ec2FcaPolicyTagsList <a name="Ec2FcaPolicyTagsList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get"></a>

```csharp
private Ec2FcaPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>[]

---


### Ec2FcaPolicyTagsOutputReference <a name="Ec2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2FcaPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2FcaPolicyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>

---



