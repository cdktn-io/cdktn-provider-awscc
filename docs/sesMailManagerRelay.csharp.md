# `sesMailManagerRelay` Submodule <a name="`sesMailManagerRelay` Submodule" id="@cdktn/provider-awscc.sesMailManagerRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerRelay <a name="SesMailManagerRelay" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay awscc_ses_mail_manager_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelay(Construct Scope, string Id, SesMailManagerRelayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig">SesMailManagerRelayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig">SesMailManagerRelayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetRelayName">ResetRelayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putAuthentication"></a>

```csharp
private void PutAuthentication(SesMailManagerRelayAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putTags"></a>

```csharp
private void PutTags(IResolvable|SesMailManagerRelayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]

---

##### `ResetRelayName` <a name="ResetRelayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetRelayName"></a>

```csharp
private void ResetRelayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesMailManagerRelay resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerRelay.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerRelay.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerRelay.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesMailManagerRelay.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SesMailManagerRelay resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesMailManagerRelay to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesMailManagerRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference">SesMailManagerRelayAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayArn">RelayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayId">RelayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList">SesMailManagerRelayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authenticationInput">AuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayNameInput">RelayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPortInput">ServerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayName">RelayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authentication"></a>

```csharp
public SesMailManagerRelayAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference">SesMailManagerRelayAuthenticationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RelayArn`<sup>Required</sup> <a name="RelayArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayArn"></a>

```csharp
public string RelayArn { get; }
```

- *Type:* string

---

##### `RelayId`<sup>Required</sup> <a name="RelayId" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayId"></a>

```csharp
public string RelayId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tags"></a>

```csharp
public SesMailManagerRelayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList">SesMailManagerRelayTagsList</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.authenticationInput"></a>

```csharp
public IResolvable|SesMailManagerRelayAuthentication AuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

---

##### `RelayNameInput`<sup>Optional</sup> <a name="RelayNameInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayNameInput"></a>

```csharp
public string RelayNameInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServerPortInput`<sup>Optional</sup> <a name="ServerPortInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPortInput"></a>

```csharp
public double ServerPortInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tagsInput"></a>

```csharp
public IResolvable|SesMailManagerRelayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]

---

##### `RelayName`<sup>Required</sup> <a name="RelayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.relayName"></a>

```csharp
public string RelayName { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelay.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerRelayAuthentication <a name="SesMailManagerRelayAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelayAuthentication {
    string NoAuthentication = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.noAuthentication">NoAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#no_authentication SesMailManagerRelay#no_authentication}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#secret_arn SesMailManagerRelay#secret_arn}. |

---

##### `NoAuthentication`<sup>Optional</sup> <a name="NoAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.noAuthentication"></a>

```csharp
public string NoAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#no_authentication SesMailManagerRelay#no_authentication}.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#secret_arn SesMailManagerRelay#secret_arn}.

---

### SesMailManagerRelayConfig <a name="SesMailManagerRelayConfig" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SesMailManagerRelayAuthentication Authentication,
    string ServerName,
    double ServerPort,
    string RelayName = null,
    IResolvable|SesMailManagerRelayTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#authentication SesMailManagerRelay#authentication}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_name SesMailManagerRelay#server_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverPort">ServerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_port SesMailManagerRelay#server_port}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.relayName">RelayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#relay_name SesMailManagerRelay#relay_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#tags SesMailManagerRelay#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.authentication"></a>

```csharp
public SesMailManagerRelayAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#authentication SesMailManagerRelay#authentication}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_name SesMailManagerRelay#server_name}.

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.serverPort"></a>

```csharp
public double ServerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#server_port SesMailManagerRelay#server_port}.

---

##### `RelayName`<sup>Optional</sup> <a name="RelayName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.relayName"></a>

```csharp
public string RelayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#relay_name SesMailManagerRelay#relay_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayConfig.property.tags"></a>

```csharp
public IResolvable|SesMailManagerRelayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#tags SesMailManagerRelay#tags}.

---

### SesMailManagerRelayTags <a name="SesMailManagerRelayTags" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#key SesMailManagerRelay#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#value SesMailManagerRelay#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#key SesMailManagerRelay#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_relay#value SesMailManagerRelay#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerRelayAuthenticationOutputReference <a name="SesMailManagerRelayAuthenticationOutputReference" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelayAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetNoAuthentication">ResetNoAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoAuthentication` <a name="ResetNoAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetNoAuthentication"></a>

```csharp
private void ResetNoAuthentication()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthenticationInput">NoAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthentication">NoAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoAuthenticationInput`<sup>Optional</sup> <a name="NoAuthenticationInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthenticationInput"></a>

```csharp
public string NoAuthenticationInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `NoAuthentication`<sup>Required</sup> <a name="NoAuthentication" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.noAuthentication"></a>

```csharp
public string NoAuthentication { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerRelayAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayAuthentication">SesMailManagerRelayAuthentication</a>

---


### SesMailManagerRelayTagsList <a name="SesMailManagerRelayTagsList" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.get"></a>

```csharp
private SesMailManagerRelayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsList.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerRelayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>[]

---


### SesMailManagerRelayTagsOutputReference <a name="SesMailManagerRelayTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesMailManagerRelayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesMailManagerRelayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMailManagerRelay.SesMailManagerRelayTags">SesMailManagerRelayTags</a>

---



