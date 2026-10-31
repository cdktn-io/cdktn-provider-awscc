# `securityagentPrivateConnection` Submodule <a name="`securityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.securityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentPrivateConnection <a name="SecurityagentPrivateConnection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnection(Construct Scope, string Id, SecurityagentPrivateConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig">SecurityagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig">SecurityagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode">PutMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMode` <a name="PutMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode"></a>

```csharp
private void PutMode(SecurityagentPrivateConnectionMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|SecurityagentPrivateConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentPrivateConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentPrivateConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentPrivateConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityagentPrivateConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentPrivateConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime">CertificateExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution">DnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress">HostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode">Mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput">ModeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput">PrivateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName">PrivateConnectionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateExpiryTime`<sup>Required</sup> <a name="CertificateExpiryTime" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```csharp
public string CertificateExpiryTime { get; }
```

- *Type:* string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution"></a>

```csharp
public string DnsResolution { get; }
```

- *Type:* string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress"></a>

```csharp
public string HostAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode"></a>

```csharp
public SecurityagentPrivateConnectionModeOutputReference Mode { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a>

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; }
```

- *Type:* string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId"></a>

```csharp
public string ResourceGatewayId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags"></a>

```csharp
public SecurityagentPrivateConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionMode ModeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `PrivateConnectionNameInput`<sup>Optional</sup> <a name="PrivateConnectionNameInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput"></a>

```csharp
public string PrivateConnectionNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName"></a>

```csharp
public string PrivateConnectionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentPrivateConnectionConfig <a name="SecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PrivateConnectionName,
    string Certificate = null,
    SecurityagentPrivateConnectionMode Mode = null,
    IResolvable|SecurityagentPrivateConnectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName">PrivateConnectionName</a></code> | <code>string</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate">Certificate</a></code> | <code>string</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode">Mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]</code> | The tags attached to the private connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PrivateConnectionName`<sup>Required</sup> <a name="PrivateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName"></a>

```csharp
public string PrivateConnectionName { get; set; }
```

- *Type:* string

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode"></a>

```csharp
public SecurityagentPrivateConnectionMode Mode { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

### SecurityagentPrivateConnectionMode <a name="SecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionMode {
    SecurityagentPrivateConnectionModeSelfManaged SelfManaged = null,
    SecurityagentPrivateConnectionModeServiceManaged ServiceManaged = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | The configuration for a self-managed private connection, where you manage your own resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle. |

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged"></a>

```csharp
public SecurityagentPrivateConnectionModeSelfManaged SelfManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

The configuration for a self-managed private connection, where you manage your own resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#self_managed SecurityagentPrivateConnection#self_managed}

---

##### `ServiceManaged`<sup>Optional</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged"></a>

```csharp
public SecurityagentPrivateConnectionModeServiceManaged ServiceManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#service_managed SecurityagentPrivateConnection#service_managed}

---

### SecurityagentPrivateConnectionModeSelfManaged <a name="SecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionModeSelfManaged {
    string ResourceConfigurationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | The identifier or ARN of the resource configuration. |

---

##### `ResourceConfigurationId`<sup>Optional</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; set; }
```

- *Type:* string

The identifier or ARN of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#resource_configuration_id SecurityagentPrivateConnection#resource_configuration_id}

---

### SecurityagentPrivateConnectionModeServiceManaged <a name="SecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionModeServiceManaged {
    string DnsResolution = null,
    string HostAddress = null,
    string IpAddressType = null,
    double Ipv4AddressesPerEni = null,
    string[] PortRanges = null,
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution">DnsResolution</a></code> | <code>string</code> | The DNS resolution mode for the resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress">HostAddress</a></code> | <code>string</code> | The IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | The IP address type of the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>double</code> | The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges">PortRanges</a></code> | <code>string[]</code> | The TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The security groups to attach to the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The subnets that the service-managed resource gateway spans. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId">VpcId</a></code> | <code>string</code> | The VPC to create the service-managed resource gateway in. |

---

##### `DnsResolution`<sup>Optional</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution"></a>

```csharp
public string DnsResolution { get; set; }
```

- *Type:* string

The DNS resolution mode for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#dns_resolution SecurityagentPrivateConnection#dns_resolution}

---

##### `HostAddress`<sup>Optional</sup> <a name="HostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress"></a>

```csharp
public string HostAddress { get; set; }
```

- *Type:* string

The IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#host_address SecurityagentPrivateConnection#host_address}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

The IP address type of the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ip_address_type SecurityagentPrivateConnection#ip_address_type}

---

##### `Ipv4AddressesPerEni`<sup>Optional</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni"></a>

```csharp
public double Ipv4AddressesPerEni { get; set; }
```

- *Type:* double

The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni SecurityagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges"></a>

```csharp
public string[] PortRanges { get; set; }
```

- *Type:* string[]

The TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#port_ranges SecurityagentPrivateConnection#port_ranges}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The security groups to attach to the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#security_group_ids SecurityagentPrivateConnection#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The subnets that the service-managed resource gateway spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#subnet_ids SecurityagentPrivateConnection#subnet_ids}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

The VPC to create the service-managed resource gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#vpc_id SecurityagentPrivateConnection#vpc_id}

---

### SecurityagentPrivateConnectionTags <a name="SecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#key SecurityagentPrivateConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#value SecurityagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentPrivateConnectionModeOutputReference <a name="SecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged">PutSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged">PutServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged">ResetServiceManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelfManaged` <a name="PutSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged"></a>

```csharp
private void PutSelfManaged(SecurityagentPrivateConnectionModeSelfManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `PutServiceManaged` <a name="PutServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged"></a>

```csharp
private void PutServiceManaged(SecurityagentPrivateConnectionModeServiceManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged"></a>

```csharp
private void ResetSelfManaged()
```

##### `ResetServiceManaged` <a name="ResetServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged"></a>

```csharp
private void ResetServiceManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput">SelfManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput">ServiceManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```csharp
public SecurityagentPrivateConnectionModeSelfManagedOutputReference SelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `ServiceManaged`<sup>Required</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```csharp
public SecurityagentPrivateConnectionModeServiceManagedOutputReference ServiceManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionModeSelfManaged SelfManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `ServiceManagedInput`<sup>Optional</sup> <a name="ServiceManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionModeServiceManaged ServiceManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionMode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---


### SecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="SecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionModeSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId">ResetResourceConfigurationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationId` <a name="ResetResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId"></a>

```csharp
private void ResetResourceConfigurationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput">ResourceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdInput`<sup>Optional</sup> <a name="ResourceConfigurationIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```csharp
public string ResourceConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionModeSelfManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---


### SecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="SecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionModeServiceManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution">ResetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress">ResetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni">ResetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsResolution` <a name="ResetDnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution"></a>

```csharp
private void ResetDnsResolution()
```

##### `ResetHostAddress` <a name="ResetHostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress"></a>

```csharp
private void ResetHostAddress()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetIpv4AddressesPerEni` <a name="ResetIpv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```csharp
private void ResetIpv4AddressesPerEni()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges"></a>

```csharp
private void ResetPortRanges()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput">DnsResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput">HostAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput">Ipv4AddressesPerEniInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">DnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">HostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsResolutionInput`<sup>Optional</sup> <a name="DnsResolutionInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput"></a>

```csharp
public string DnsResolutionInput { get; }
```

- *Type:* string

---

##### `HostAddressInput`<sup>Optional</sup> <a name="HostAddressInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput"></a>

```csharp
public string HostAddressInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="Ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```csharp
public double Ipv4AddressesPerEniInput { get; }
```

- *Type:* double

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput"></a>

```csharp
public string[] PortRangesInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```csharp
public string DnsResolution { get; }
```

- *Type:* string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```csharp
public string HostAddress { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```csharp
public double Ipv4AddressesPerEni { get; }
```

- *Type:* double

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionModeServiceManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---


### SecurityagentPrivateConnectionTagsList <a name="SecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get"></a>

```csharp
private SecurityagentPrivateConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

---


### SecurityagentPrivateConnectionTagsOutputReference <a name="SecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityagentPrivateConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityagentPrivateConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>

---



