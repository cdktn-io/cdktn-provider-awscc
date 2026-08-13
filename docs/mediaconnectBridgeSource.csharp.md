# `mediaconnectBridgeSource` Submodule <a name="`mediaconnectBridgeSource` Submodule" id="@cdktn/provider-awscc.mediaconnectBridgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridgeSource <a name="MediaconnectBridgeSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSource(Construct Scope, string Id, MediaconnectBridgeSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig">MediaconnectBridgeSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig">MediaconnectBridgeSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource">PutFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource">PutNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetFlowSource">ResetFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetNetworkSource">ResetNetworkSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFlowSource` <a name="PutFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource"></a>

```csharp
private void PutFlowSource(MediaconnectBridgeSourceFlowSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putFlowSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---

##### `PutNetworkSource` <a name="PutNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource"></a>

```csharp
private void PutNetworkSource(MediaconnectBridgeSourceNetworkSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.putNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---

##### `ResetFlowSource` <a name="ResetFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetFlowSource"></a>

```csharp
private void ResetFlowSource()
```

##### `ResetNetworkSource` <a name="ResetNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.resetNetworkSource"></a>

```csharp
private void ResetNetworkSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectBridgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectBridgeSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectBridgeSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectBridgeSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectBridgeSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconnectBridgeSource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectBridgeSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectBridgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSource">FlowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference">MediaconnectBridgeSourceFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSource">NetworkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference">MediaconnectBridgeSourceNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArnInput">BridgeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSourceInput">FlowSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSourceInput">NetworkSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArn">BridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FlowSource`<sup>Required</sup> <a name="FlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSource"></a>

```csharp
public MediaconnectBridgeSourceFlowSourceOutputReference FlowSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference">MediaconnectBridgeSourceFlowSourceOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkSource`<sup>Required</sup> <a name="NetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSource"></a>

```csharp
public MediaconnectBridgeSourceNetworkSourceOutputReference NetworkSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference">MediaconnectBridgeSourceNetworkSourceOutputReference</a>

---

##### `BridgeArnInput`<sup>Optional</sup> <a name="BridgeArnInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArnInput"></a>

```csharp
public string BridgeArnInput { get; }
```

- *Type:* string

---

##### `FlowSourceInput`<sup>Optional</sup> <a name="FlowSourceInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.flowSourceInput"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceFlowSource FlowSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSourceInput`<sup>Optional</sup> <a name="NetworkSourceInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.networkSourceInput"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceNetworkSource NetworkSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.bridgeArn"></a>

```csharp
public string BridgeArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeSourceConfig <a name="MediaconnectBridgeSourceConfig" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BridgeArn,
    string Name,
    MediaconnectBridgeSourceFlowSource FlowSource = null,
    MediaconnectBridgeSourceNetworkSource NetworkSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.bridgeArn">BridgeArn</a></code> | <code>string</code> | The Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.name">Name</a></code> | <code>string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.flowSource">FlowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.networkSource">NetworkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.bridgeArn"></a>

```csharp
public string BridgeArn { get; set; }
```

- *Type:* string

The Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#bridge_arn MediaconnectBridgeSource#bridge_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#name MediaconnectBridgeSource#name}

---

##### `FlowSource`<sup>Optional</sup> <a name="FlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.flowSource"></a>

```csharp
public MediaconnectBridgeSourceFlowSource FlowSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#flow_source MediaconnectBridgeSource#flow_source}

---

##### `NetworkSource`<sup>Optional</sup> <a name="NetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceConfig.property.networkSource"></a>

```csharp
public MediaconnectBridgeSourceNetworkSource NetworkSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#network_source MediaconnectBridgeSource#network_source}

---

### MediaconnectBridgeSourceFlowSource <a name="MediaconnectBridgeSourceFlowSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceFlowSource {
    string FlowArn = null,
    MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment FlowVpcInterfaceAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowArn">FlowArn</a></code> | <code>string</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowVpcInterfaceAttachment">FlowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |

---

##### `FlowArn`<sup>Optional</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowArn"></a>

```csharp
public string FlowArn { get; set; }
```

- *Type:* string

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#flow_arn MediaconnectBridgeSource#flow_arn}

---

##### `FlowVpcInterfaceAttachment`<sup>Optional</sup> <a name="FlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource.property.flowVpcInterfaceAttachment"></a>

```csharp
public MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment FlowVpcInterfaceAttachment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#flow_vpc_interface_attachment MediaconnectBridgeSource#flow_vpc_interface_attachment}

---

### MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment {
    string VpcInterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this resource. |

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; set; }
```

- *Type:* string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#vpc_interface_name MediaconnectBridgeSource#vpc_interface_name}

---

### MediaconnectBridgeSourceNetworkSource <a name="MediaconnectBridgeSourceNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceNetworkSource {
    string MulticastIp = null,
    MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings MulticastSourceSettings = null,
    string NetworkName = null,
    double Port = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastIp">MulticastIp</a></code> | <code>string</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastSourceSettings">MulticastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.networkName">NetworkName</a></code> | <code>string</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.port">Port</a></code> | <code>double</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.protocol">Protocol</a></code> | <code>string</code> | The network source protocol. |

---

##### `MulticastIp`<sup>Optional</sup> <a name="MulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastIp"></a>

```csharp
public string MulticastIp { get; set; }
```

- *Type:* string

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#multicast_ip MediaconnectBridgeSource#multicast_ip}

---

##### `MulticastSourceSettings`<sup>Optional</sup> <a name="MulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.multicastSourceSettings"></a>

```csharp
public MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings MulticastSourceSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#multicast_source_settings MediaconnectBridgeSource#multicast_source_settings}

---

##### `NetworkName`<sup>Optional</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.networkName"></a>

```csharp
public string NetworkName { get; set; }
```

- *Type:* string

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#network_name MediaconnectBridgeSource#network_name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#port MediaconnectBridgeSource#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#protocol MediaconnectBridgeSource#protocol}

---

### MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings {
    string MulticastSourceIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.property.multicastSourceIp">MulticastSourceIp</a></code> | <code>string</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `MulticastSourceIp`<sup>Optional</sup> <a name="MulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```csharp
public string MulticastSourceIp { get; set; }
```

- *Type:* string

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge_source#multicast_source_ip MediaconnectBridgeSource#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```csharp
private void ResetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```csharp
public string VpcInterfaceNameInput { get; }
```

- *Type:* string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---


### MediaconnectBridgeSourceFlowSourceOutputReference <a name="MediaconnectBridgeSourceFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceFlowSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment">PutFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowArn">ResetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">ResetFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlowVpcInterfaceAttachment` <a name="PutFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```csharp
private void PutFlowVpcInterfaceAttachment(MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `ResetFlowArn` <a name="ResetFlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowArn"></a>

```csharp
private void ResetFlowArn()
```

##### `ResetFlowVpcInterfaceAttachment` <a name="ResetFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```csharp
private void ResetFlowVpcInterfaceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment">FlowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArnInput">FlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">FlowVpcInterfaceAttachmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowVpcInterfaceAttachment`<sup>Required</sup> <a name="FlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```csharp
public MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference FlowVpcInterfaceAttachment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArnInput"></a>

```csharp
public string FlowArnInput { get; }
```

- *Type:* string

---

##### `FlowVpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="FlowVpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment FlowVpcInterfaceAttachmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceFlowSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceFlowSource">MediaconnectBridgeSourceFlowSource</a>

---


### MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">ResetMulticastSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMulticastSourceIp` <a name="ResetMulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```csharp
private void ResetMulticastSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">MulticastSourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">MulticastSourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MulticastSourceIpInput`<sup>Optional</sup> <a name="MulticastSourceIpInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```csharp
public string MulticastSourceIpInput { get; }
```

- *Type:* string

---

##### `MulticastSourceIp`<sup>Required</sup> <a name="MulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```csharp
public string MulticastSourceIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---


### MediaconnectBridgeSourceNetworkSourceOutputReference <a name="MediaconnectBridgeSourceNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectBridgeSourceNetworkSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings">PutMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastIp">ResetMulticastIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastSourceSettings">ResetMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetNetworkName">ResetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMulticastSourceSettings` <a name="PutMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```csharp
private void PutMulticastSourceSettings(MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.putMulticastSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---

##### `ResetMulticastIp` <a name="ResetMulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastIp"></a>

```csharp
private void ResetMulticastIp()
```

##### `ResetMulticastSourceSettings` <a name="ResetMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```csharp
private void ResetMulticastSourceSettings()
```

##### `ResetNetworkName` <a name="ResetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetNetworkName"></a>

```csharp
private void ResetNetworkName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings">MulticastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIpInput">MulticastIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettingsInput">MulticastSourceSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkNameInput">NetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp">MulticastIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName">NetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MulticastSourceSettings`<sup>Required</sup> <a name="MulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```csharp
public MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference MulticastSourceSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `MulticastIpInput`<sup>Optional</sup> <a name="MulticastIpInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIpInput"></a>

```csharp
public string MulticastIpInput { get; }
```

- *Type:* string

---

##### `MulticastSourceSettingsInput`<sup>Optional</sup> <a name="MulticastSourceSettingsInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings MulticastSourceSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---

##### `NetworkNameInput`<sup>Optional</sup> <a name="NetworkNameInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkNameInput"></a>

```csharp
public string NetworkNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `MulticastIp`<sup>Required</sup> <a name="MulticastIp" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp"></a>

```csharp
public string MulticastIp { get; }
```

- *Type:* string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName"></a>

```csharp
public string NetworkName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectBridgeSourceNetworkSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridgeSource.MediaconnectBridgeSourceNetworkSource">MediaconnectBridgeSourceNetworkSource</a>

---



