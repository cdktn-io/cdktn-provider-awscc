# `kinesisvideoSignalingChannel` Submodule <a name="`kinesisvideoSignalingChannel` Submodule" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisvideoSignalingChannel <a name="KinesisvideoSignalingChannel" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel awscc_kinesisvideo_signaling_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KinesisvideoSignalingChannel(Construct Scope, string Id, KinesisvideoSignalingChannelConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig">KinesisvideoSignalingChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig">KinesisvideoSignalingChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetMessageTtlSeconds">ResetMessageTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags"></a>

```csharp
private void PutTags(IResolvable|KinesisvideoSignalingChannelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]

---

##### `ResetMessageTtlSeconds` <a name="ResetMessageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetMessageTtlSeconds"></a>

```csharp
private void ResetMessageTtlSeconds()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KinesisvideoSignalingChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KinesisvideoSignalingChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KinesisvideoSignalingChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

KinesisvideoSignalingChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KinesisvideoSignalingChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KinesisvideoSignalingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KinesisvideoSignalingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList">KinesisvideoSignalingChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSecondsInput">MessageTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSeconds">MessageTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tags"></a>

```csharp
public KinesisvideoSignalingChannelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList">KinesisvideoSignalingChannelTagsList</a>

---

##### `MessageTtlSecondsInput`<sup>Optional</sup> <a name="MessageTtlSecondsInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSecondsInput"></a>

```csharp
public double MessageTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tagsInput"></a>

```csharp
public IResolvable|KinesisvideoSignalingChannelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `MessageTtlSeconds`<sup>Required</sup> <a name="MessageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSeconds"></a>

```csharp
public double MessageTtlSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisvideoSignalingChannelConfig <a name="KinesisvideoSignalingChannelConfig" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KinesisvideoSignalingChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double MessageTtlSeconds = null,
    string Name = null,
    IResolvable|KinesisvideoSignalingChannelTags[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.messageTtlSeconds">MessageTtlSeconds</a></code> | <code>double</code> | The period of time a signaling channel retains undelivered messages before they are discarded. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.name">Name</a></code> | <code>string</code> | The name of the Kinesis Video Signaling Channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.type">Type</a></code> | <code>string</code> | The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MessageTtlSeconds`<sup>Optional</sup> <a name="MessageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.messageTtlSeconds"></a>

```csharp
public double MessageTtlSeconds { get; set; }
```

- *Type:* double

The period of time a signaling channel retains undelivered messages before they are discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#message_ttl_seconds KinesisvideoSignalingChannel#message_ttl_seconds}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Kinesis Video Signaling Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#name KinesisvideoSignalingChannel#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.tags"></a>

```csharp
public IResolvable|KinesisvideoSignalingChannelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#tags KinesisvideoSignalingChannel#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#type KinesisvideoSignalingChannel#type}

---

### KinesisvideoSignalingChannelTags <a name="KinesisvideoSignalingChannelTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KinesisvideoSignalingChannelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#key KinesisvideoSignalingChannel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.  The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#value KinesisvideoSignalingChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisvideoSignalingChannelTagsList <a name="KinesisvideoSignalingChannelTagsList" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KinesisvideoSignalingChannelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get"></a>

```csharp
private KinesisvideoSignalingChannelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.internalValue"></a>

```csharp
public IResolvable|KinesisvideoSignalingChannelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>[]

---


### KinesisvideoSignalingChannelTagsOutputReference <a name="KinesisvideoSignalingChannelTagsOutputReference" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new KinesisvideoSignalingChannelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KinesisvideoSignalingChannelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>

---



