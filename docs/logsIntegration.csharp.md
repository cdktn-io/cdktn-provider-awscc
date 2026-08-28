# `logsIntegration` Submodule <a name="`logsIntegration` Submodule" id="@cdktn/provider-awscc.logsIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsIntegration <a name="LogsIntegration" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration awscc_logs_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsIntegration(Construct Scope, string Id, LogsIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig">LogsIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig">LogsIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig">PutResourceConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceConfig` <a name="PutResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig"></a>

```csharp
private void PutResourceConfig(LogsIntegrationResourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogsIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LogsIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LogsIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LogsIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationStatus">IntegrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference">LogsIntegrationResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationNameInput">IntegrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfigInput">ResourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationName">IntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationStatus`<sup>Required</sup> <a name="IntegrationStatus" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationStatus"></a>

```csharp
public string IntegrationStatus { get; }
```

- *Type:* string

---

##### `ResourceConfig`<sup>Required</sup> <a name="ResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfig"></a>

```csharp
public LogsIntegrationResourceConfigOutputReference ResourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference">LogsIntegrationResourceConfigOutputReference</a>

---

##### `IntegrationNameInput`<sup>Optional</sup> <a name="IntegrationNameInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationNameInput"></a>

```csharp
public string IntegrationNameInput { get; }
```

- *Type:* string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationTypeInput"></a>

```csharp
public string IntegrationTypeInput { get; }
```

- *Type:* string

---

##### `ResourceConfigInput`<sup>Optional</sup> <a name="ResourceConfigInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.resourceConfigInput"></a>

```csharp
public IResolvable|LogsIntegrationResourceConfig ResourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationName"></a>

```csharp
public string IntegrationName { get; }
```

- *Type:* string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsIntegrationConfig <a name="LogsIntegrationConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IntegrationName,
    string IntegrationType,
    LogsIntegrationResourceConfig ResourceConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationName">IntegrationName</a></code> | <code>string</code> | User provided identifier for integration, unique to the user account. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationType">IntegrationType</a></code> | <code>string</code> | The type of the Integration. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | OpenSearchResourceConfig for the given Integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationName"></a>

```csharp
public string IntegrationName { get; set; }
```

- *Type:* string

User provided identifier for integration, unique to the user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#integration_name LogsIntegration#integration_name}

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.integrationType"></a>

```csharp
public string IntegrationType { get; set; }
```

- *Type:* string

The type of the Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#integration_type LogsIntegration#integration_type}

---

##### `ResourceConfig`<sup>Required</sup> <a name="ResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationConfig.property.resourceConfig"></a>

```csharp
public LogsIntegrationResourceConfig ResourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

OpenSearchResourceConfig for the given Integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#resource_config LogsIntegration#resource_config}

---

### LogsIntegrationResourceConfig <a name="LogsIntegrationResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsIntegrationResourceConfig {
    LogsIntegrationResourceConfigOpenSearchResourceConfig OpenSearchResourceConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.property.openSearchResourceConfig">OpenSearchResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#open_search_resource_config LogsIntegration#open_search_resource_config}. |

---

##### `OpenSearchResourceConfig`<sup>Optional</sup> <a name="OpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig.property.openSearchResourceConfig"></a>

```csharp
public LogsIntegrationResourceConfigOpenSearchResourceConfig OpenSearchResourceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#open_search_resource_config LogsIntegration#open_search_resource_config}.

---

### LogsIntegrationResourceConfigOpenSearchResourceConfig <a name="LogsIntegrationResourceConfigOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsIntegrationResourceConfigOpenSearchResourceConfig {
    string ApplicationArn = null,
    string[] DashboardViewerPrincipals = null,
    string DataSourceRoleArn = null,
    string KmsKeyArn = null,
    double RetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#application_arn LogsIntegration#application_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dashboardViewerPrincipals">DashboardViewerPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#dashboard_viewer_principals LogsIntegration#dashboard_viewer_principals}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dataSourceRoleArn">DataSourceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#data_source_role_arn LogsIntegration#data_source_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#kms_key_arn LogsIntegration#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#retention_days LogsIntegration#retention_days}. |

---

##### `ApplicationArn`<sup>Optional</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#application_arn LogsIntegration#application_arn}.

---

##### `DashboardViewerPrincipals`<sup>Optional</sup> <a name="DashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dashboardViewerPrincipals"></a>

```csharp
public string[] DashboardViewerPrincipals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#dashboard_viewer_principals LogsIntegration#dashboard_viewer_principals}.

---

##### `DataSourceRoleArn`<sup>Optional</sup> <a name="DataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.dataSourceRoleArn"></a>

```csharp
public string DataSourceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#data_source_role_arn LogsIntegration#data_source_role_arn}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#kms_key_arn LogsIntegration#kms_key_arn}.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_integration#retention_days LogsIntegration#retention_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference <a name="LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetApplicationArn">ResetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDashboardViewerPrincipals">ResetDashboardViewerPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDataSourceRoleArn">ResetDataSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationArn` <a name="ResetApplicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetApplicationArn"></a>

```csharp
private void ResetApplicationArn()
```

##### `ResetDashboardViewerPrincipals` <a name="ResetDashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDashboardViewerPrincipals"></a>

```csharp
private void ResetDashboardViewerPrincipals()
```

##### `ResetDataSourceRoleArn` <a name="ResetDataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetDataSourceRoleArn"></a>

```csharp
private void ResetDataSourceRoleArn()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArnInput">ApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipalsInput">DashboardViewerPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArnInput">DataSourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipals">DashboardViewerPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArn">DataSourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArnInput`<sup>Optional</sup> <a name="ApplicationArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArnInput"></a>

```csharp
public string ApplicationArnInput { get; }
```

- *Type:* string

---

##### `DashboardViewerPrincipalsInput`<sup>Optional</sup> <a name="DashboardViewerPrincipalsInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipalsInput"></a>

```csharp
public string[] DashboardViewerPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `DataSourceRoleArnInput`<sup>Optional</sup> <a name="DataSourceRoleArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArnInput"></a>

```csharp
public string DataSourceRoleArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `DashboardViewerPrincipals`<sup>Required</sup> <a name="DashboardViewerPrincipals" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dashboardViewerPrincipals"></a>

```csharp
public string[] DashboardViewerPrincipals { get; }
```

- *Type:* string[]

---

##### `DataSourceRoleArn`<sup>Required</sup> <a name="DataSourceRoleArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.dataSourceRoleArn"></a>

```csharp
public string DataSourceRoleArn { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsIntegrationResourceConfigOpenSearchResourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---


### LogsIntegrationResourceConfigOutputReference <a name="LogsIntegrationResourceConfigOutputReference" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LogsIntegrationResourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig">PutOpenSearchResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resetOpenSearchResourceConfig">ResetOpenSearchResourceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpenSearchResourceConfig` <a name="PutOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig"></a>

```csharp
private void PutOpenSearchResourceConfig(LogsIntegrationResourceConfigOpenSearchResourceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.putOpenSearchResourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---

##### `ResetOpenSearchResourceConfig` <a name="ResetOpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.resetOpenSearchResourceConfig"></a>

```csharp
private void ResetOpenSearchResourceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfig">OpenSearchResourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference">LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfigInput">OpenSearchResourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OpenSearchResourceConfig`<sup>Required</sup> <a name="OpenSearchResourceConfig" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfig"></a>

```csharp
public LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference OpenSearchResourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference">LogsIntegrationResourceConfigOpenSearchResourceConfigOutputReference</a>

---

##### `OpenSearchResourceConfigInput`<sup>Optional</sup> <a name="OpenSearchResourceConfigInput" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.openSearchResourceConfigInput"></a>

```csharp
public IResolvable|LogsIntegrationResourceConfigOpenSearchResourceConfig OpenSearchResourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOpenSearchResourceConfig">LogsIntegrationResourceConfigOpenSearchResourceConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LogsIntegrationResourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsIntegration.LogsIntegrationResourceConfig">LogsIntegrationResourceConfig</a>

---



