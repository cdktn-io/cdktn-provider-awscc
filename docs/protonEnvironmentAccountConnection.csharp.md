# `protonEnvironmentAccountConnection` Submodule <a name="`protonEnvironmentAccountConnection` Submodule" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProtonEnvironmentAccountConnection <a name="ProtonEnvironmentAccountConnection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection awscc_proton_environment_account_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ProtonEnvironmentAccountConnection(Construct Scope, string Id, ProtonEnvironmentAccountConnectionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig">ProtonEnvironmentAccountConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig">ProtonEnvironmentAccountConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn">ResetCodebuildRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn">ResetComponentRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId">ResetEnvironmentAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName">ResetEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId">ResetManagementAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|ProtonEnvironmentAccountConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

---

##### `ResetCodebuildRoleArn` <a name="ResetCodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetCodebuildRoleArn"></a>

```csharp
private void ResetCodebuildRoleArn()
```

##### `ResetComponentRoleArn` <a name="ResetComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetComponentRoleArn"></a>

```csharp
private void ResetComponentRoleArn()
```

##### `ResetEnvironmentAccountId` <a name="ResetEnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentAccountId"></a>

```csharp
private void ResetEnvironmentAccountId()
```

##### `ResetEnvironmentName` <a name="ResetEnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetEnvironmentName"></a>

```csharp
private void ResetEnvironmentName()
```

##### `ResetManagementAccountId` <a name="ResetManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetManagementAccountId"></a>

```csharp
private void ResetManagementAccountId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ProtonEnvironmentAccountConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ProtonEnvironmentAccountConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ProtonEnvironmentAccountConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ProtonEnvironmentAccountConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ProtonEnvironmentAccountConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProtonEnvironmentAccountConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProtonEnvironmentAccountConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ProtonEnvironmentAccountConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId">EnvironmentAccountConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput">CodebuildRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput">ComponentRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput">EnvironmentAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput">EnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput">ManagementAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn">CodebuildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn">ComponentRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId">EnvironmentAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName">EnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId">ManagementAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EnvironmentAccountConnectionId`<sup>Required</sup> <a name="EnvironmentAccountConnectionId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountConnectionId"></a>

```csharp
public string EnvironmentAccountConnectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tags"></a>

```csharp
public ProtonEnvironmentAccountConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList">ProtonEnvironmentAccountConnectionTagsList</a>

---

##### `CodebuildRoleArnInput`<sup>Optional</sup> <a name="CodebuildRoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArnInput"></a>

```csharp
public string CodebuildRoleArnInput { get; }
```

- *Type:* string

---

##### `ComponentRoleArnInput`<sup>Optional</sup> <a name="ComponentRoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArnInput"></a>

```csharp
public string ComponentRoleArnInput { get; }
```

- *Type:* string

---

##### `EnvironmentAccountIdInput`<sup>Optional</sup> <a name="EnvironmentAccountIdInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountIdInput"></a>

```csharp
public string EnvironmentAccountIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentNameInput`<sup>Optional</sup> <a name="EnvironmentNameInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentNameInput"></a>

```csharp
public string EnvironmentNameInput { get; }
```

- *Type:* string

---

##### `ManagementAccountIdInput`<sup>Optional</sup> <a name="ManagementAccountIdInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountIdInput"></a>

```csharp
public string ManagementAccountIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tagsInput"></a>

```csharp
public IResolvable|ProtonEnvironmentAccountConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

---

##### `CodebuildRoleArn`<sup>Required</sup> <a name="CodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.codebuildRoleArn"></a>

```csharp
public string CodebuildRoleArn { get; }
```

- *Type:* string

---

##### `ComponentRoleArn`<sup>Required</sup> <a name="ComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.componentRoleArn"></a>

```csharp
public string ComponentRoleArn { get; }
```

- *Type:* string

---

##### `EnvironmentAccountId`<sup>Required</sup> <a name="EnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentAccountId"></a>

```csharp
public string EnvironmentAccountId { get; }
```

- *Type:* string

---

##### `EnvironmentName`<sup>Required</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.environmentName"></a>

```csharp
public string EnvironmentName { get; }
```

- *Type:* string

---

##### `ManagementAccountId`<sup>Required</sup> <a name="ManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.managementAccountId"></a>

```csharp
public string ManagementAccountId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProtonEnvironmentAccountConnectionConfig <a name="ProtonEnvironmentAccountConnectionConfig" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ProtonEnvironmentAccountConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CodebuildRoleArn = null,
    string ComponentRoleArn = null,
    string EnvironmentAccountId = null,
    string EnvironmentName = null,
    string ManagementAccountId = null,
    string RoleArn = null,
    IResolvable|ProtonEnvironmentAccountConnectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn">CodebuildRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM service role in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn">ComponentRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId">EnvironmentAccountId</a></code> | <code>string</code> | The environment account that's connected to the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName">EnvironmentName</a></code> | <code>string</code> | The name of the AWS Proton environment that's created in the associated management account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId">ManagementAccountId</a></code> | <code>string</code> | The ID of the management account that accepts or rejects the environment account connection. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]</code> | <p>An optional list of metadata items that you can associate with the Proton environment account connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CodebuildRoleArn`<sup>Optional</sup> <a name="CodebuildRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.codebuildRoleArn"></a>

```csharp
public string CodebuildRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM service role in the environment account.

AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#codebuild_role_arn ProtonEnvironmentAccountConnection#codebuild_role_arn}

---

##### `ComponentRoleArn`<sup>Optional</sup> <a name="ComponentRoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.componentRoleArn"></a>

```csharp
public string ComponentRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account.

It determines the scope of infrastructure that a component can provision in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#component_role_arn ProtonEnvironmentAccountConnection#component_role_arn}

---

##### `EnvironmentAccountId`<sup>Optional</sup> <a name="EnvironmentAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentAccountId"></a>

```csharp
public string EnvironmentAccountId { get; set; }
```

- *Type:* string

The environment account that's connected to the environment account connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#environment_account_id ProtonEnvironmentAccountConnection#environment_account_id}

---

##### `EnvironmentName`<sup>Optional</sup> <a name="EnvironmentName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.environmentName"></a>

```csharp
public string EnvironmentName { get; set; }
```

- *Type:* string

The name of the AWS Proton environment that's created in the associated management account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#environment_name ProtonEnvironmentAccountConnection#environment_name}

---

##### `ManagementAccountId`<sup>Optional</sup> <a name="ManagementAccountId" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.managementAccountId"></a>

```csharp
public string ManagementAccountId { get; set; }
```

- *Type:* string

The ID of the management account that accepts or rejects the environment account connection.

You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#management_account_id ProtonEnvironmentAccountConnection#management_account_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account.

AWS Proton uses this role to provision infrastructure resources in the associated environment account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#role_arn ProtonEnvironmentAccountConnection#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionConfig.property.tags"></a>

```csharp
public IResolvable|ProtonEnvironmentAccountConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

<p>An optional list of metadata items that you can associate with the Proton environment account connection.

A tag is a key-value pair.</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
<i>Proton User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#tags ProtonEnvironmentAccountConnection#tags}

---

### ProtonEnvironmentAccountConnectionTags <a name="ProtonEnvironmentAccountConnectionTags" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ProtonEnvironmentAccountConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key">Key</a></code> | <code>string</code> | <p>The key of the resource tag.</p>. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value">Value</a></code> | <code>string</code> | <p>The value of the resource tag.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

<p>The key of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#key ProtonEnvironmentAccountConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

<p>The value of the resource tag.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/proton_environment_account_connection#value ProtonEnvironmentAccountConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonEnvironmentAccountConnectionTagsList <a name="ProtonEnvironmentAccountConnectionTagsList" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ProtonEnvironmentAccountConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get"></a>

```csharp
private ProtonEnvironmentAccountConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|ProtonEnvironmentAccountConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>[]

---


### ProtonEnvironmentAccountConnectionTagsOutputReference <a name="ProtonEnvironmentAccountConnectionTagsOutputReference" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ProtonEnvironmentAccountConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ProtonEnvironmentAccountConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.protonEnvironmentAccountConnection.ProtonEnvironmentAccountConnectionTags">ProtonEnvironmentAccountConnectionTags</a>

---



