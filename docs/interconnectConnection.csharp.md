# `interconnectConnection` Submodule <a name="`interconnectConnection` Submodule" id="@cdktn/provider-awscc.interconnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InterconnectConnection <a name="InterconnectConnection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection awscc_interconnect_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnection(Construct Scope, string Id, InterconnectConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig">InterconnectConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig">InterconnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint">PutAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount">PutRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey">ResetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount">ResetRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount">ResetRemoteOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachPoint` <a name="PutAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint"></a>

```csharp
private void PutAttachPoint(InterconnectConnectionAttachPoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `PutRemoteAccount` <a name="PutRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount"></a>

```csharp
private void PutRemoteAccount(InterconnectConnectionRemoteAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags"></a>

```csharp
private void PutTags(IResolvable|InterconnectConnectionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

---

##### `ResetActivationKey` <a name="ResetActivationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey"></a>

```csharp
private void ResetActivationKey()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth"></a>

```csharp
private void ResetBandwidth()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId"></a>

```csharp
private void ResetEnvironmentId()
```

##### `ResetRemoteAccount` <a name="ResetRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount"></a>

```csharp
private void ResetRemoteAccount()
```

##### `ResetRemoteOwnerAccount` <a name="ResetRemoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount"></a>

```csharp
private void ResetRemoteOwnerAccount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InterconnectConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InterconnectConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InterconnectConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

InterconnectConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InterconnectConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InterconnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the InterconnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint">AttachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier">BillingTier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount">OwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName">ProviderName</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount">RemoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId">SharedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput">ActivationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput">AttachPointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput">BandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput">RemoteAccountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput">RemoteOwnerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey">ActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth">Bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount">RemoteOwnerAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachPoint`<sup>Required</sup> <a name="AttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint"></a>

```csharp
public InterconnectConnectionAttachPointOutputReference AttachPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a>

---

##### `BillingTier`<sup>Required</sup> <a name="BillingTier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier"></a>

```csharp
public double BillingTier { get; }
```

- *Type:* double

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount"></a>

```csharp
public string OwnerAccount { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName"></a>

```csharp
public InterconnectConnectionProviderNameOutputReference ProviderName { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a>

---

##### `RemoteAccount`<sup>Required</sup> <a name="RemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount"></a>

```csharp
public InterconnectConnectionRemoteAccountOutputReference RemoteAccount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a>

---

##### `SharedId`<sup>Required</sup> <a name="SharedId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId"></a>

```csharp
public string SharedId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags"></a>

```csharp
public InterconnectConnectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ActivationKeyInput`<sup>Optional</sup> <a name="ActivationKeyInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput"></a>

```csharp
public string ActivationKeyInput { get; }
```

- *Type:* string

---

##### `AttachPointInput`<sup>Optional</sup> <a name="AttachPointInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput"></a>

```csharp
public IResolvable|InterconnectConnectionAttachPoint AttachPointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput"></a>

```csharp
public string BandwidthInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `RemoteAccountInput`<sup>Optional</sup> <a name="RemoteAccountInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput"></a>

```csharp
public IResolvable|InterconnectConnectionRemoteAccount RemoteAccountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `RemoteOwnerAccountInput`<sup>Optional</sup> <a name="RemoteOwnerAccountInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput"></a>

```csharp
public string RemoteOwnerAccountInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput"></a>

```csharp
public IResolvable|InterconnectConnectionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

---

##### `ActivationKey`<sup>Required</sup> <a name="ActivationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey"></a>

```csharp
public string ActivationKey { get; }
```

- *Type:* string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth"></a>

```csharp
public string Bandwidth { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `RemoteOwnerAccount`<sup>Required</sup> <a name="RemoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount"></a>

```csharp
public string RemoteOwnerAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InterconnectConnectionAttachPoint <a name="InterconnectConnectionAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionAttachPoint {
    string Arn = null,
    string DirectConnectGateway = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn">Arn</a></code> | <code>string</code> | The ARN of the resource to attach to. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway">DirectConnectGateway</a></code> | <code>string</code> | The ID of the Direct Connect Gateway to attach to. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the resource to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#arn InterconnectConnection#arn}

---

##### `DirectConnectGateway`<sup>Optional</sup> <a name="DirectConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway"></a>

```csharp
public string DirectConnectGateway { get; set; }
```

- *Type:* string

The ID of the Direct Connect Gateway to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#direct_connect_gateway InterconnectConnection#direct_connect_gateway}

---

### InterconnectConnectionConfig <a name="InterconnectConnectionConfig" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    InterconnectConnectionAttachPoint AttachPoint,
    string ActivationKey = null,
    string Bandwidth = null,
    string Description = null,
    string EnvironmentId = null,
    InterconnectConnectionRemoteAccount RemoteAccount = null,
    string RemoteOwnerAccount = null,
    IResolvable|InterconnectConnectionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint">AttachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | The logical attachment point in your AWS network where the managed connection will be connected. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey">ActivationKey</a></code> | <code>string</code> | The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth">Bandwidth</a></code> | <code>string</code> | The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description">Description</a></code> | <code>string</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount">RemoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount">RemoteOwnerAccount</a></code> | <code>string</code> | Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachPoint`<sup>Required</sup> <a name="AttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint"></a>

```csharp
public InterconnectConnectionAttachPoint AttachPoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

The logical attachment point in your AWS network where the managed connection will be connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#attach_point InterconnectConnection#attach_point}

---

##### `ActivationKey`<sup>Optional</sup> <a name="ActivationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey"></a>

```csharp
public string ActivationKey { get; set; }
```

- *Type:* string

The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#activation_key InterconnectConnection#activation_key}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth"></a>

```csharp
public string Bandwidth { get; set; }
```

- *Type:* string

The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#bandwidth InterconnectConnection#bandwidth}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#description InterconnectConnection#description}

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#environment_id InterconnectConnection#environment_id}

---

##### `RemoteAccount`<sup>Optional</sup> <a name="RemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount"></a>

```csharp
public InterconnectConnectionRemoteAccount RemoteAccount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#remote_account InterconnectConnection#remote_account}

---

##### `RemoteOwnerAccount`<sup>Optional</sup> <a name="RemoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount"></a>

```csharp
public string RemoteOwnerAccount { get; set; }
```

- *Type:* string

Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#remote_owner_account InterconnectConnection#remote_owner_account}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags"></a>

```csharp
public IResolvable|InterconnectConnectionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#tags InterconnectConnection#tags}

---

### InterconnectConnectionProviderName <a name="InterconnectConnectionProviderName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionProviderName {

};
```


### InterconnectConnectionRemoteAccount <a name="InterconnectConnectionRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionRemoteAccount {
    string Identifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier">Identifier</a></code> | <code>string</code> | The identifier of the remote account. |

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The identifier of the remote account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#identifier InterconnectConnection#identifier}

---

### InterconnectConnectionTags <a name="InterconnectConnectionTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#key InterconnectConnection#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/interconnect_connection#value InterconnectConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### InterconnectConnectionAttachPointOutputReference <a name="InterconnectConnectionAttachPointOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionAttachPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway">ResetDirectConnectGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetDirectConnectGateway` <a name="ResetDirectConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway"></a>

```csharp
private void ResetDirectConnectGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput">DirectConnectGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway">DirectConnectGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayInput`<sup>Optional</sup> <a name="DirectConnectGatewayInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput"></a>

```csharp
public string DirectConnectGatewayInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DirectConnectGateway`<sup>Required</sup> <a name="DirectConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway"></a>

```csharp
public string DirectConnectGateway { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InterconnectConnectionAttachPoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---


### InterconnectConnectionProviderNameOutputReference <a name="InterconnectConnectionProviderNameOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionProviderNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider">CloudServiceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider">LastMileProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudServiceProvider`<sup>Required</sup> <a name="CloudServiceProvider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider"></a>

```csharp
public string CloudServiceProvider { get; }
```

- *Type:* string

---

##### `LastMileProvider`<sup>Required</sup> <a name="LastMileProvider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider"></a>

```csharp
public string LastMileProvider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue"></a>

```csharp
public InterconnectConnectionProviderName InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a>

---


### InterconnectConnectionRemoteAccountOutputReference <a name="InterconnectConnectionRemoteAccountOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionRemoteAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InterconnectConnectionRemoteAccount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---


### InterconnectConnectionTagsList <a name="InterconnectConnectionTagsList" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get"></a>

```csharp
private InterconnectConnectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue"></a>

```csharp
public IResolvable|InterconnectConnectionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

---


### InterconnectConnectionTagsOutputReference <a name="InterconnectConnectionTagsOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new InterconnectConnectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|InterconnectConnectionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>

---



