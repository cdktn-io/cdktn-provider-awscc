# `workspaceswebSessionLogger` Submodule <a name="`workspaceswebSessionLogger` Submodule" id="@cdktn/provider-awscc.workspaceswebSessionLogger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebSessionLogger <a name="WorkspaceswebSessionLogger" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger awscc_workspacesweb_session_logger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLogger(Construct Scope, string Id, WorkspaceswebSessionLoggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig">WorkspaceswebSessionLoggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig">WorkspaceswebSessionLoggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter">PutEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventFilter` <a name="PutEventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter"></a>

```csharp
private void PutEventFilter(WorkspaceswebSessionLoggerEventFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putEventFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(WorkspaceswebSessionLoggerLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putTags"></a>

```csharp
private void PutTags(IResolvable|WorkspaceswebSessionLoggerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetAdditionalEncryptionContext"></a>

```csharp
private void ResetAdditionalEncryptionContext()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetCustomerManagedKey"></a>

```csharp
private void ResetCustomerManagedKey()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebSessionLogger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebSessionLogger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebSessionLogger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebSessionLogger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebSessionLogger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspaceswebSessionLogger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebSessionLogger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebSessionLogger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebSessionLogger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter">EventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference">WorkspaceswebSessionLoggerEventFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference">WorkspaceswebSessionLoggerLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn">SessionLoggerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList">WorkspaceswebSessionLoggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput">EventFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilter"></a>

```csharp
public WorkspaceswebSessionLoggerEventFilterOutputReference EventFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference">WorkspaceswebSessionLoggerEventFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfiguration"></a>

```csharp
public WorkspaceswebSessionLoggerLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference">WorkspaceswebSessionLoggerLogConfigurationOutputReference</a>

---

##### `SessionLoggerArn`<sup>Required</sup> <a name="SessionLoggerArn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.sessionLoggerArn"></a>

```csharp
public string SessionLoggerArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tags"></a>

```csharp
public WorkspaceswebSessionLoggerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList">WorkspaceswebSessionLoggerTagsList</a>

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContextInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContextInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKeyInput"></a>

```csharp
public string CustomerManagedKeyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EventFilterInput`<sup>Optional</sup> <a name="EventFilterInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.eventFilterInput"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerEventFilter EventFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.logConfigurationInput"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerLogConfiguration LogConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tagsInput"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLogger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebSessionLoggerConfig <a name="WorkspaceswebSessionLoggerConfig" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    WorkspaceswebSessionLoggerEventFilter EventFilter,
    WorkspaceswebSessionLoggerLogConfiguration LogConfiguration,
    System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext = null,
    string CustomerManagedKey = null,
    string DisplayName = null,
    IResolvable|WorkspaceswebSessionLoggerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter">EventFilter</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EventFilter`<sup>Required</sup> <a name="EventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.eventFilter"></a>

```csharp
public WorkspaceswebSessionLoggerEventFilter EventFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#event_filter WorkspaceswebSessionLogger#event_filter}.

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.logConfiguration"></a>

```csharp
public WorkspaceswebSessionLoggerLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_configuration WorkspaceswebSessionLogger#log_configuration}.

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.additionalEncryptionContext"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalEncryptionContext { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#additional_encryption_context WorkspaceswebSessionLogger#additional_encryption_context}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.customerManagedKey"></a>

```csharp
public string CustomerManagedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#customer_managed_key WorkspaceswebSessionLogger#customer_managed_key}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#display_name WorkspaceswebSessionLogger#display_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerConfig.property.tags"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#tags WorkspaceswebSessionLogger#tags}.

---

### WorkspaceswebSessionLoggerEventFilter <a name="WorkspaceswebSessionLoggerEventFilter" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerEventFilter {
    string All = null,
    string[] Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all">All</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#all WorkspaceswebSessionLogger#all}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include">Include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.all"></a>

```csharp
public string All { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#all WorkspaceswebSessionLogger#all}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#include WorkspaceswebSessionLogger#include}.

---

### WorkspaceswebSessionLoggerLogConfiguration <a name="WorkspaceswebSessionLoggerLogConfiguration" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerLogConfiguration {
    WorkspaceswebSessionLoggerLogConfigurationS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#s3 WorkspaceswebSessionLogger#s3}. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration.property.s3"></a>

```csharp
public WorkspaceswebSessionLoggerLogConfigurationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#s3 WorkspaceswebSessionLogger#s3}.

---

### WorkspaceswebSessionLoggerLogConfigurationS3 <a name="WorkspaceswebSessionLoggerLogConfigurationS3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerLogConfigurationS3 {
    string Bucket = null,
    string BucketOwner = null,
    string FolderStructure = null,
    string KeyPrefix = null,
    string LogFileFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure">FolderStructure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat">LogFileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket WorkspaceswebSessionLogger#bucket}.

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#bucket_owner WorkspaceswebSessionLogger#bucket_owner}.

---

##### `FolderStructure`<sup>Optional</sup> <a name="FolderStructure" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.folderStructure"></a>

```csharp
public string FolderStructure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#folder_structure WorkspaceswebSessionLogger#folder_structure}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key_prefix WorkspaceswebSessionLogger#key_prefix}.

---

##### `LogFileFormat`<sup>Optional</sup> <a name="LogFileFormat" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3.property.logFileFormat"></a>

```csharp
public string LogFileFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#log_file_format WorkspaceswebSessionLogger#log_file_format}.

---

### WorkspaceswebSessionLoggerTags <a name="WorkspaceswebSessionLoggerTags" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key WorkspaceswebSessionLogger#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#value WorkspaceswebSessionLogger#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#key WorkspaceswebSessionLogger#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/workspacesweb_session_logger#value WorkspaceswebSessionLogger#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebSessionLoggerEventFilterOutputReference <a name="WorkspaceswebSessionLoggerEventFilterOutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerEventFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput">AllInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all">All</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.allInput"></a>

```csharp
public string AllInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.all"></a>

```csharp
public string All { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerEventFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerEventFilter">WorkspaceswebSessionLoggerEventFilter</a>

---


### WorkspaceswebSessionLoggerLogConfigurationOutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3"></a>

```csharp
private void PutS3(WorkspaceswebSessionLoggerLogConfigurationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference">WorkspaceswebSessionLoggerLogConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3"></a>

```csharp
public WorkspaceswebSessionLoggerLogConfigurationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference">WorkspaceswebSessionLoggerLogConfigurationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.s3Input"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerLogConfigurationS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerLogConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfiguration">WorkspaceswebSessionLoggerLogConfiguration</a>

---


### WorkspaceswebSessionLoggerLogConfigurationS3OutputReference <a name="WorkspaceswebSessionLoggerLogConfigurationS3OutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerLogConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetFolderStructure">ResetFolderStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetLogFileFormat">ResetLogFileFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetFolderStructure` <a name="ResetFolderStructure" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetFolderStructure"></a>

```csharp
private void ResetFolderStructure()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetKeyPrefix"></a>

```csharp
private void ResetKeyPrefix()
```

##### `ResetLogFileFormat` <a name="ResetLogFileFormat" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.resetLogFileFormat"></a>

```csharp
private void ResetLogFileFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput">FolderStructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput">LogFileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure">FolderStructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat">LogFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `FolderStructureInput`<sup>Optional</sup> <a name="FolderStructureInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructureInput"></a>

```csharp
public string FolderStructureInput { get; }
```

- *Type:* string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefixInput"></a>

```csharp
public string KeyPrefixInput { get; }
```

- *Type:* string

---

##### `LogFileFormatInput`<sup>Optional</sup> <a name="LogFileFormatInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormatInput"></a>

```csharp
public string LogFileFormatInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `FolderStructure`<sup>Required</sup> <a name="FolderStructure" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.folderStructure"></a>

```csharp
public string FolderStructure { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `LogFileFormat`<sup>Required</sup> <a name="LogFileFormat" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.logFileFormat"></a>

```csharp
public string LogFileFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerLogConfigurationS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerLogConfigurationS3">WorkspaceswebSessionLoggerLogConfigurationS3</a>

---


### WorkspaceswebSessionLoggerTagsList <a name="WorkspaceswebSessionLoggerTagsList" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.get"></a>

```csharp
private WorkspaceswebSessionLoggerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>[]

---


### WorkspaceswebSessionLoggerTagsOutputReference <a name="WorkspaceswebSessionLoggerTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebSessionLoggerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebSessionLoggerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebSessionLogger.WorkspaceswebSessionLoggerTags">WorkspaceswebSessionLoggerTags</a>

---



