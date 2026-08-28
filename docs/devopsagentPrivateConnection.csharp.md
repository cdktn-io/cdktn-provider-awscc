# `devopsagentPrivateConnection` Submodule <a name="`devopsagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.devopsagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentPrivateConnection <a name="DevopsagentPrivateConnection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection awscc_devopsagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnection(Construct Scope, string Id, DevopsagentPrivateConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig">DevopsagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig">DevopsagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration">PutConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfiguration` <a name="PutConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration"></a>

```csharp
private void PutConnectionConfiguration(DevopsagentPrivateConnectionConnectionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|DevopsagentPrivateConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentPrivateConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentPrivateConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentPrivateConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentPrivateConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentPrivateConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime">CertificateExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput">ConnectionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateExpiryTime`<sup>Required</sup> <a name="CertificateExpiryTime" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime"></a>

```csharp
public string CertificateExpiryTime { get; }
```

- *Type:* string

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration"></a>

```csharp
public DevopsagentPrivateConnectionConnectionConfigurationOutputReference ConnectionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags"></a>

```csharp
public DevopsagentPrivateConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ConnectionConfigurationInput`<sup>Optional</sup> <a name="ConnectionConfigurationInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionConnectionConfiguration ConnectionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentPrivateConnectionConfig <a name="DevopsagentPrivateConnectionConfig" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DevopsagentPrivateConnectionConnectionConfiguration ConnectionConfiguration,
    string Name,
    string Certificate = null,
    IResolvable|DevopsagentPrivateConnectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name">Name</a></code> | <code>string</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate">Certificate</a></code> | <code>string</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration"></a>

```csharp
public DevopsagentPrivateConnectionConnectionConfiguration ConnectionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

### DevopsagentPrivateConnectionConnectionConfiguration <a name="DevopsagentPrivateConnectionConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConnectionConfiguration {
    DevopsagentPrivateConnectionConnectionConfigurationSelfManaged SelfManaged = null,
    DevopsagentPrivateConnectionConnectionConfigurationServiceManaged ServiceManaged = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | Configuration for a self-managed Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | Configuration for a service-managed Private Connection. |

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged"></a>

```csharp
public DevopsagentPrivateConnectionConnectionConfigurationSelfManaged SelfManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

Configuration for a self-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#self_managed DevopsagentPrivateConnection#self_managed}

---

##### `ServiceManaged`<sup>Optional</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged"></a>

```csharp
public DevopsagentPrivateConnectionConnectionConfigurationServiceManaged ServiceManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

Configuration for a service-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#service_managed DevopsagentPrivateConnection#service_managed}

---

### DevopsagentPrivateConnectionConnectionConfigurationSelfManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConnectionConfigurationSelfManaged {
    string ResourceConfigurationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | The ARN of the Resource Configuration. |

---

##### `ResourceConfigurationId`<sup>Optional</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; set; }
```

- *Type:* string

The ARN of the Resource Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#resource_configuration_id DevopsagentPrivateConnection#resource_configuration_id}

---

### DevopsagentPrivateConnectionConnectionConfigurationServiceManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConnectionConfigurationServiceManaged {
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
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution">DnsResolution</a></code> | <code>string</code> | DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress">HostAddress</a></code> | <code>string</code> | IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | IP address type of the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>double</code> | Number of IPv4 addresses in each ENI for the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges">PortRanges</a></code> | <code>string[]</code> | TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Security groups to attach to the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Subnets that the service-managed Resource Gateway will span. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId">VpcId</a></code> | <code>string</code> | VPC to create the service-managed Resource Gateway in. |

---

##### `DnsResolution`<sup>Optional</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution"></a>

```csharp
public string DnsResolution { get; set; }
```

- *Type:* string

DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#dns_resolution DevopsagentPrivateConnection#dns_resolution}

---

##### `HostAddress`<sup>Optional</sup> <a name="HostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress"></a>

```csharp
public string HostAddress { get; set; }
```

- *Type:* string

IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#host_address DevopsagentPrivateConnection#host_address}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

IP address type of the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#ip_address_type DevopsagentPrivateConnection#ip_address_type}

---

##### `Ipv4AddressesPerEni`<sup>Optional</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni"></a>

```csharp
public double Ipv4AddressesPerEni { get; set; }
```

- *Type:* double

Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#ipv_4_addresses_per_eni DevopsagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `PortRanges`<sup>Optional</sup> <a name="PortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges"></a>

```csharp
public string[] PortRanges { get; set; }
```

- *Type:* string[]

TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#port_ranges DevopsagentPrivateConnection#port_ranges}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Security groups to attach to the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#security_group_ids DevopsagentPrivateConnection#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Subnets that the service-managed Resource Gateway will span.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#subnet_ids DevopsagentPrivateConnection#subnet_ids}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

VPC to create the service-managed Resource Gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#vpc_id DevopsagentPrivateConnection#vpc_id}

---

### DevopsagentPrivateConnectionTags <a name="DevopsagentPrivateConnectionTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#key DevopsagentPrivateConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#value DevopsagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentPrivateConnectionConnectionConfigurationOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConnectionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged">PutSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged">PutServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged">ResetServiceManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelfManaged` <a name="PutSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged"></a>

```csharp
private void PutSelfManaged(DevopsagentPrivateConnectionConnectionConfigurationSelfManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `PutServiceManaged` <a name="PutServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged"></a>

```csharp
private void PutServiceManaged(DevopsagentPrivateConnectionConnectionConfigurationServiceManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged"></a>

```csharp
private void ResetSelfManaged()
```

##### `ResetServiceManaged` <a name="ResetServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged"></a>

```csharp
private void ResetServiceManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged">SelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged">ServiceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput">SelfManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput">ServiceManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged"></a>

```csharp
public DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference SelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a>

---

##### `ServiceManaged`<sup>Required</sup> <a name="ServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged"></a>

```csharp
public DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference ServiceManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a>

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationSelfManaged SelfManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `ServiceManagedInput`<sup>Optional</sup> <a name="ServiceManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationServiceManaged ServiceManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionConnectionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId">ResetResourceConfigurationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationId` <a name="ResetResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId"></a>

```csharp
private void ResetResourceConfigurationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput">ResourceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId">ResourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdInput`<sup>Optional</sup> <a name="ResourceConfigurationIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```csharp
public string ResourceConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationId`<sup>Required</sup> <a name="ResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId"></a>

```csharp
public string ResourceConfigurationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationSelfManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution">ResetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress">ResetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni">ResetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges">ResetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsResolution` <a name="ResetDnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution"></a>

```csharp
private void ResetDnsResolution()
```

##### `ResetHostAddress` <a name="ResetHostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress"></a>

```csharp
private void ResetHostAddress()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetIpv4AddressesPerEni` <a name="ResetIpv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```csharp
private void ResetIpv4AddressesPerEni()
```

##### `ResetPortRanges` <a name="ResetPortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges"></a>

```csharp
private void ResetPortRanges()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId"></a>

```csharp
private void ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput">DnsResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput">HostAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput">Ipv4AddressesPerEniInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput">PortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution">DnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress">HostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges">PortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsResolutionInput`<sup>Optional</sup> <a name="DnsResolutionInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput"></a>

```csharp
public string DnsResolutionInput { get; }
```

- *Type:* string

---

##### `HostAddressInput`<sup>Optional</sup> <a name="HostAddressInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput"></a>

```csharp
public string HostAddressInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="Ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```csharp
public double Ipv4AddressesPerEniInput { get; }
```

- *Type:* double

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput"></a>

```csharp
public string[] PortRangesInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `DnsResolution`<sup>Required</sup> <a name="DnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution"></a>

```csharp
public string DnsResolution { get; }
```

- *Type:* string

---

##### `HostAddress`<sup>Required</sup> <a name="HostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress"></a>

```csharp
public string HostAddress { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```csharp
public double Ipv4AddressesPerEni { get; }
```

- *Type:* double

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges"></a>

```csharp
public string[] PortRanges { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionConnectionConfigurationServiceManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---


### DevopsagentPrivateConnectionTagsList <a name="DevopsagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get"></a>

```csharp
private DevopsagentPrivateConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

---


### DevopsagentPrivateConnectionTagsOutputReference <a name="DevopsagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentPrivateConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentPrivateConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>

---



