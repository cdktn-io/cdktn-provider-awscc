# `workspacesWorkspacesPool` Submodule <a name="`workspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.workspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspacesPool <a name="WorkspacesWorkspacesPool" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPool(Construct Scope, string Id, WorkspacesWorkspacesPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig">WorkspacesWorkspacesPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig">WorkspacesWorkspacesPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings">PutTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode">ResetRunningMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings">ResetTimeoutSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings"></a>

```csharp
private void PutApplicationSettings(WorkspacesWorkspacesPoolApplicationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity"></a>

```csharp
private void PutCapacity(WorkspacesWorkspacesPoolCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags"></a>

```csharp
private void PutTags(IResolvable|WorkspacesWorkspacesPoolTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

---

##### `PutTimeoutSettings` <a name="PutTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings"></a>

```csharp
private void PutTimeoutSettings(WorkspacesWorkspacesPoolTimeoutSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.putTimeoutSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetApplicationSettings"></a>

```csharp
private void ResetApplicationSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRunningMode` <a name="ResetRunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetRunningMode"></a>

```csharp
private void ResetRunningMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeoutSettings` <a name="ResetTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.resetTimeoutSettings"></a>

```csharp
private void ResetTimeoutSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesWorkspacesPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesWorkspacesPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesWorkspacesPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspacesWorkspacesPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesWorkspacesPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn">PoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings">TimeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput">CapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput">PoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput">RunningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput">TimeoutSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode">RunningMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettings"></a>

```csharp
public WorkspacesWorkspacesPoolApplicationSettingsOutputReference ApplicationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference">WorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacity"></a>

```csharp
public WorkspacesWorkspacesPoolCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference">WorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PoolArn`<sup>Required</sup> <a name="PoolArn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolArn"></a>

```csharp
public string PoolArn { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tags"></a>

```csharp
public WorkspacesWorkspacesPoolTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList">WorkspacesWorkspacesPoolTagsList</a>

---

##### `TimeoutSettings`<sup>Required</sup> <a name="TimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettings"></a>

```csharp
public WorkspacesWorkspacesPoolTimeoutSettingsOutputReference TimeoutSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference">WorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.applicationSettingsInput"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolApplicationSettings ApplicationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.capacityInput"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolCapacity CapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolNameInput"></a>

```csharp
public string PoolNameInput { get; }
```

- *Type:* string

---

##### `RunningModeInput`<sup>Optional</sup> <a name="RunningModeInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningModeInput"></a>

```csharp
public string RunningModeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tagsInput"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

---

##### `TimeoutSettingsInput`<sup>Optional</sup> <a name="TimeoutSettingsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.timeoutSettingsInput"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolTimeoutSettings TimeoutSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

##### `RunningMode`<sup>Required</sup> <a name="RunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.runningMode"></a>

```csharp
public string RunningMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspacesPoolApplicationSettings <a name="WorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolApplicationSettings {
    string SettingsGroup = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}. |

---

##### `SettingsGroup`<sup>Optional</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#settings_group WorkspacesWorkspacesPool#settings_group}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#status WorkspacesWorkspacesPool#status}.

---

### WorkspacesWorkspacesPoolCapacity <a name="WorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolCapacity {
    double DesiredUserSessions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions">DesiredUserSessions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}. |

---

##### `DesiredUserSessions`<sup>Required</sup> <a name="DesiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity.property.desiredUserSessions"></a>

```csharp
public double DesiredUserSessions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#desired_user_sessions WorkspacesWorkspacesPool#desired_user_sessions}.

---

### WorkspacesWorkspacesPoolConfig <a name="WorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BundleId,
    WorkspacesWorkspacesPoolCapacity Capacity,
    string DirectoryId,
    string PoolName,
    WorkspacesWorkspacesPoolApplicationSettings ApplicationSettings = null,
    string Description = null,
    string RunningMode = null,
    IResolvable|WorkspacesWorkspacesPoolTags[] Tags = null,
    WorkspacesWorkspacesPoolTimeoutSettings TimeoutSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName">PoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode">RunningMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings">TimeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#bundle_id WorkspacesWorkspacesPool#bundle_id}.

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.capacity"></a>

```csharp
public WorkspacesWorkspacesPoolCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#capacity WorkspacesWorkspacesPool#capacity}.

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#directory_id WorkspacesWorkspacesPool#directory_id}.

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.poolName"></a>

```csharp
public string PoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#pool_name WorkspacesWorkspacesPool#pool_name}.

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.applicationSettings"></a>

```csharp
public WorkspacesWorkspacesPoolApplicationSettings ApplicationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#application_settings WorkspacesWorkspacesPool#application_settings}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#description WorkspacesWorkspacesPool#description}.

---

##### `RunningMode`<sup>Optional</sup> <a name="RunningMode" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.runningMode"></a>

```csharp
public string RunningMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#running_mode WorkspacesWorkspacesPool#running_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.tags"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#tags WorkspacesWorkspacesPool#tags}.

---

##### `TimeoutSettings`<sup>Optional</sup> <a name="TimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolConfig.property.timeoutSettings"></a>

```csharp
public WorkspacesWorkspacesPoolTimeoutSettings TimeoutSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#timeout_settings WorkspacesWorkspacesPool#timeout_settings}.

---

### WorkspacesWorkspacesPoolTags <a name="WorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#key WorkspacesWorkspacesPool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#value WorkspacesWorkspacesPool#value}.

---

### WorkspacesWorkspacesPoolTimeoutSettings <a name="WorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolTimeoutSettings {
    double DisconnectTimeoutInSeconds = null,
    double IdleDisconnectTimeoutInSeconds = null,
    double MaxUserDurationInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}. |

---

##### `DisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```csharp
public double DisconnectTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#disconnect_timeout_in_seconds WorkspacesWorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```csharp
public double IdleDisconnectTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesWorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `MaxUserDurationInSeconds`<sup>Optional</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```csharp
public double MaxUserDurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/workspaces_workspaces_pool#max_user_duration_in_seconds WorkspacesWorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolApplicationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">ResetSettingsGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSettingsGroup` <a name="ResetSettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```csharp
private void ResetSettingsGroup()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">SettingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SettingsGroupInput`<sup>Optional</sup> <a name="SettingsGroupInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```csharp
public string SettingsGroupInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SettingsGroup`<sup>Required</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolApplicationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolApplicationSettings">WorkspacesWorkspacesPoolApplicationSettings</a>

---


### WorkspacesWorkspacesPoolCapacityOutputReference <a name="WorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">DesiredUserSessionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">DesiredUserSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredUserSessionsInput`<sup>Optional</sup> <a name="DesiredUserSessionsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```csharp
public double DesiredUserSessionsInput { get; }
```

- *Type:* double

---

##### `DesiredUserSessions`<sup>Required</sup> <a name="DesiredUserSessions" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```csharp
public double DesiredUserSessions { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolCapacity">WorkspacesWorkspacesPoolCapacity</a>

---


### WorkspacesWorkspacesPoolTagsList <a name="WorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get"></a>

```csharp
private WorkspacesWorkspacesPoolTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>[]

---


### WorkspacesWorkspacesPoolTagsOutputReference <a name="WorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTags">WorkspacesWorkspacesPoolTags</a>

---


### WorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspacesWorkspacesPoolTimeoutSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">ResetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">ResetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">ResetMaxUserDurationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisconnectTimeoutInSeconds` <a name="ResetDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```csharp
private void ResetDisconnectTimeoutInSeconds()
```

##### `ResetIdleDisconnectTimeoutInSeconds` <a name="ResetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```csharp
private void ResetIdleDisconnectTimeoutInSeconds()
```

##### `ResetMaxUserDurationInSeconds` <a name="ResetMaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```csharp
private void ResetMaxUserDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">DisconnectTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">IdleDisconnectTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">MaxUserDurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="DisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```csharp
public double DisconnectTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `IdleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```csharp
public double IdleDisconnectTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `MaxUserDurationInSecondsInput`<sup>Optional</sup> <a name="MaxUserDurationInSecondsInput" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```csharp
public double MaxUserDurationInSecondsInput { get; }
```

- *Type:* double

---

##### `DisconnectTimeoutInSeconds`<sup>Required</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```csharp
public double DisconnectTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```csharp
public double IdleDisconnectTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `MaxUserDurationInSeconds`<sup>Required</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```csharp
public double MaxUserDurationInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspacesWorkspacesPoolTimeoutSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspacesWorkspacesPool.WorkspacesWorkspacesPoolTimeoutSettings">WorkspacesWorkspacesPoolTimeoutSettings</a>

---



