# `supportauthzSupportPermit` Submodule <a name="`supportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.supportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportauthzSupportPermit <a name="SupportauthzSupportPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermit(Construct Scope, string Id, SupportauthzSupportPermitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig">SupportauthzSupportPermitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig">SupportauthzSupportPermitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit">PutPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo">PutSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId">ResetSupportCaseDisplayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermit` <a name="PutPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit"></a>

```csharp
private void PutPermit(SupportauthzSupportPermitPermit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `PutSigningKeyInfo` <a name="PutSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo"></a>

```csharp
private void PutSigningKeyInfo(SupportauthzSupportPermitSigningKeyInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags"></a>

```csharp
private void PutTags(IResolvable|SupportauthzSupportPermitTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetSupportCaseDisplayId` <a name="ResetSupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId"></a>

```csharp
private void ResetSupportCaseDisplayId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportauthzSupportPermit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportauthzSupportPermit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportauthzSupportPermit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportauthzSupportPermit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupportauthzSupportPermit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit">Permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId">PermitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo">SigningKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput">PermitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput">SigningKeyInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput">SupportCaseDisplayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId">SupportCaseDisplayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permit`<sup>Required</sup> <a name="Permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit"></a>

```csharp
public SupportauthzSupportPermitPermitOutputReference Permit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a>

---

##### `PermitId`<sup>Required</sup> <a name="PermitId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId"></a>

```csharp
public string PermitId { get; }
```

- *Type:* string

---

##### `SigningKeyInfo`<sup>Required</sup> <a name="SigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo"></a>

```csharp
public SupportauthzSupportPermitSigningKeyInfoOutputReference SigningKeyInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags"></a>

```csharp
public SupportauthzSupportPermitTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermitInput`<sup>Optional</sup> <a name="PermitInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermit PermitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `SigningKeyInfoInput`<sup>Optional</sup> <a name="SigningKeyInfoInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput"></a>

```csharp
public IResolvable|SupportauthzSupportPermitSigningKeyInfo SigningKeyInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `SupportCaseDisplayIdInput`<sup>Optional</sup> <a name="SupportCaseDisplayIdInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput"></a>

```csharp
public string SupportCaseDisplayIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput"></a>

```csharp
public IResolvable|SupportauthzSupportPermitTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SupportCaseDisplayId`<sup>Required</sup> <a name="SupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```csharp
public string SupportCaseDisplayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportauthzSupportPermitConfig <a name="SupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    SupportauthzSupportPermitPermit Permit,
    SupportauthzSupportPermitSigningKeyInfo SigningKeyInfo,
    string Description = null,
    string SupportCaseDisplayId = null,
    IResolvable|SupportauthzSupportPermitTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name">Name</a></code> | <code>string</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit">Permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo">SigningKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId">SupportCaseDisplayId</a></code> | <code>string</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]</code> | A list of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `Permit`<sup>Required</sup> <a name="Permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit"></a>

```csharp
public SupportauthzSupportPermitPermit Permit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `SigningKeyInfo`<sup>Required</sup> <a name="SigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo"></a>

```csharp
public SupportauthzSupportPermitSigningKeyInfo SigningKeyInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `SupportCaseDisplayId`<sup>Optional</sup> <a name="SupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId"></a>

```csharp
public string SupportCaseDisplayId { get; set; }
```

- *Type:* string

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags"></a>

```csharp
public IResolvable|SupportauthzSupportPermitTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

### SupportauthzSupportPermitPermit <a name="SupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermit {
    SupportauthzSupportPermitPermitActions Actions,
    SupportauthzSupportPermitPermitResources Resources,
    IResolvable|SupportauthzSupportPermitPermitConditions[] Conditions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]</code> | Optional time-bound conditions (at most two). |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions"></a>

```csharp
public SupportauthzSupportPermitPermitActions Actions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources"></a>

```csharp
public SupportauthzSupportPermitPermitResources Resources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

Optional time-bound conditions (at most two).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#conditions SupportauthzSupportPermit#conditions}

---

### SupportauthzSupportPermitPermitActions <a name="SupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitActions {
    string[] Actions = null,
    string AllActions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions">Actions</a></code> | <code>string[]</code> | An explicit list of actions to grant. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions">AllActions</a></code> | <code>string</code> | Grants all actions. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

An explicit list of actions to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `AllActions`<sup>Optional</sup> <a name="AllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions"></a>

```csharp
public string AllActions { get; set; }
```

- *Type:* string

Grants all actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_actions SupportauthzSupportPermit#all_actions}

---

### SupportauthzSupportPermitPermitConditions <a name="SupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitConditions {
    string AllowAfter = null,
    string AllowBefore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter">AllowAfter</a></code> | <code>string</code> | The permit is active only after this time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore">AllowBefore</a></code> | <code>string</code> | The permit is active only before this time. |

---

##### `AllowAfter`<sup>Optional</sup> <a name="AllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter"></a>

```csharp
public string AllowAfter { get; set; }
```

- *Type:* string

The permit is active only after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_after SupportauthzSupportPermit#allow_after}

---

##### `AllowBefore`<sup>Optional</sup> <a name="AllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore"></a>

```csharp
public string AllowBefore { get; set; }
```

- *Type:* string

The permit is active only before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_before SupportauthzSupportPermit#allow_before}

---

### SupportauthzSupportPermitPermitResources <a name="SupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitResources {
    string AllResourcesInRegion = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion">AllResourcesInRegion</a></code> | <code>string</code> | Applies to all resources in the region. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources">Resources</a></code> | <code>string[]</code> | An explicit list of resource ARNs. |

---

##### `AllResourcesInRegion`<sup>Optional</sup> <a name="AllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion"></a>

```csharp
public string AllResourcesInRegion { get; set; }
```

- *Type:* string

Applies to all resources in the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_resources_in_region SupportauthzSupportPermit#all_resources_in_region}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

An explicit list of resource ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

### SupportauthzSupportPermitSigningKeyInfo <a name="SupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitSigningKeyInfo {
    string KmsKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey">KmsKey</a></code> | <code>string</code> | The ARN of the KMS key used to sign permit grants. |

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The ARN of the KMS key used to sign permit grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#kms_key SupportauthzSupportPermit#kms_key}

---

### SupportauthzSupportPermitTags <a name="SupportauthzSupportPermitTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#key SupportauthzSupportPermit#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#value SupportauthzSupportPermit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SupportauthzSupportPermitPermitActionsOutputReference <a name="SupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions">ResetAllActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetAllActions` <a name="ResetAllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions"></a>

```csharp
private void ResetAllActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput">AllActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions">AllActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `AllActionsInput`<sup>Optional</sup> <a name="AllActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput"></a>

```csharp
public string AllActionsInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `AllActions`<sup>Required</sup> <a name="AllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```csharp
public string AllActions { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitActions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---


### SupportauthzSupportPermitPermitConditionsList <a name="SupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get"></a>

```csharp
private SupportauthzSupportPermitPermitConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

---


### SupportauthzSupportPermitPermitConditionsOutputReference <a name="SupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter">ResetAllowAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore">ResetAllowBefore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAfter` <a name="ResetAllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter"></a>

```csharp
private void ResetAllowAfter()
```

##### `ResetAllowBefore` <a name="ResetAllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore"></a>

```csharp
private void ResetAllowBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput">AllowAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput">AllowBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">AllowAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">AllowBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowAfterInput`<sup>Optional</sup> <a name="AllowAfterInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput"></a>

```csharp
public string AllowAfterInput { get; }
```

- *Type:* string

---

##### `AllowBeforeInput`<sup>Optional</sup> <a name="AllowBeforeInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput"></a>

```csharp
public string AllowBeforeInput { get; }
```

- *Type:* string

---

##### `AllowAfter`<sup>Required</sup> <a name="AllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```csharp
public string AllowAfter { get; }
```

- *Type:* string

---

##### `AllowBefore`<sup>Required</sup> <a name="AllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```csharp
public string AllowBefore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>

---


### SupportauthzSupportPermitPermitOutputReference <a name="SupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions"></a>

```csharp
private void PutActions(SupportauthzSupportPermitPermitActions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|SupportauthzSupportPermitPermitConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources"></a>

```csharp
private void PutResources(SupportauthzSupportPermitPermitResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```csharp
public SupportauthzSupportPermitPermitActionsOutputReference Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```csharp
public SupportauthzSupportPermitPermitConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```csharp
public SupportauthzSupportPermitPermitResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitActions ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitResources ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---


### SupportauthzSupportPermitPermitResourcesOutputReference <a name="SupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitPermitResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion">ResetAllResourcesInRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllResourcesInRegion` <a name="ResetAllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion"></a>

```csharp
private void ResetAllResourcesInRegion()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput">AllResourcesInRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">AllResourcesInRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllResourcesInRegionInput`<sup>Optional</sup> <a name="AllResourcesInRegionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput"></a>

```csharp
public string AllResourcesInRegionInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `AllResourcesInRegion`<sup>Required</sup> <a name="AllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```csharp
public string AllResourcesInRegion { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitPermitResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---


### SupportauthzSupportPermitSigningKeyInfoOutputReference <a name="SupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitSigningKeyInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitSigningKeyInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---


### SupportauthzSupportPermitTagsList <a name="SupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get"></a>

```csharp
private SupportauthzSupportPermitTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

---


### SupportauthzSupportPermitTagsOutputReference <a name="SupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportauthzSupportPermitTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SupportauthzSupportPermitTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>

---



