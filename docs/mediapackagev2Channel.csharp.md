# `mediapackagev2Channel` Submodule <a name="`mediapackagev2Channel` Submodule" id="@cdktn/provider-awscc.mediapackagev2Channel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2Channel <a name="Mediapackagev2Channel" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel awscc_mediapackagev2_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2Channel(Construct Scope, string Id, Mediapackagev2ChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig">Mediapackagev2ChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig">Mediapackagev2ChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration">PutInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration">PutOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration">ResetInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType">ResetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration">ResetOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode">ResetOutputLockingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputSwitchConfiguration` <a name="PutInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration"></a>

```csharp
private void PutInputSwitchConfiguration(Mediapackagev2ChannelInputSwitchConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---

##### `PutOutputHeaderConfiguration` <a name="PutOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration"></a>

```csharp
private void PutOutputHeaderConfiguration(Mediapackagev2ChannelOutputHeaderConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags"></a>

```csharp
private void PutTags(IResolvable|Mediapackagev2ChannelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInputSwitchConfiguration` <a name="ResetInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration"></a>

```csharp
private void ResetInputSwitchConfiguration()
```

##### `ResetInputType` <a name="ResetInputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType"></a>

```csharp
private void ResetInputType()
```

##### `ResetOutputHeaderConfiguration` <a name="ResetOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration"></a>

```csharp
private void ResetOutputHeaderConfiguration()
```

##### `ResetOutputLockingMode` <a name="ResetOutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode"></a>

```csharp
private void ResetOutputLockingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2Channel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2Channel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2Channel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Mediapackagev2Channel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Mediapackagev2Channel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Mediapackagev2Channel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2Channel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints">IngestEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls">IngestEndpointUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration">InputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration">OutputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput">ChannelGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput">InputSwitchConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput">InputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput">OutputHeaderConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput">OutputLockingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName">ChannelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType">InputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode">OutputLockingMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngestEndpoints`<sup>Required</sup> <a name="IngestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints"></a>

```csharp
public Mediapackagev2ChannelIngestEndpointsList IngestEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a>

---

##### `IngestEndpointUrls`<sup>Required</sup> <a name="IngestEndpointUrls" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls"></a>

```csharp
public string[] IngestEndpointUrls { get; }
```

- *Type:* string[]

---

##### `InputSwitchConfiguration`<sup>Required</sup> <a name="InputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration"></a>

```csharp
public Mediapackagev2ChannelInputSwitchConfigurationOutputReference InputSwitchConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `OutputHeaderConfiguration`<sup>Required</sup> <a name="OutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration"></a>

```csharp
public Mediapackagev2ChannelOutputHeaderConfigurationOutputReference OutputHeaderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags"></a>

```csharp
public Mediapackagev2ChannelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a>

---

##### `ChannelGroupNameInput`<sup>Optional</sup> <a name="ChannelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput"></a>

```csharp
public string ChannelGroupNameInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InputSwitchConfigurationInput`<sup>Optional</sup> <a name="InputSwitchConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput"></a>

```csharp
public IResolvable|Mediapackagev2ChannelInputSwitchConfiguration InputSwitchConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---

##### `InputTypeInput`<sup>Optional</sup> <a name="InputTypeInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput"></a>

```csharp
public string InputTypeInput { get; }
```

- *Type:* string

---

##### `OutputHeaderConfigurationInput`<sup>Optional</sup> <a name="OutputHeaderConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput"></a>

```csharp
public IResolvable|Mediapackagev2ChannelOutputHeaderConfiguration OutputHeaderConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---

##### `OutputLockingModeInput`<sup>Optional</sup> <a name="OutputLockingModeInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput"></a>

```csharp
public string OutputLockingModeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput"></a>

```csharp
public IResolvable|Mediapackagev2ChannelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName"></a>

```csharp
public string ChannelGroupName { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType"></a>

```csharp
public string InputType { get; }
```

- *Type:* string

---

##### `OutputLockingMode`<sup>Required</sup> <a name="OutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode"></a>

```csharp
public string OutputLockingMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2ChannelConfig <a name="Mediapackagev2ChannelConfig" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelGroupName,
    string ChannelName,
    string Description = null,
    Mediapackagev2ChannelInputSwitchConfiguration InputSwitchConfiguration = null,
    string InputType = null,
    Mediapackagev2ChannelOutputHeaderConfiguration OutputHeaderConfiguration = null,
    string OutputLockingMode = null,
    IResolvable|Mediapackagev2ChannelTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName">ChannelGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description">Description</a></code> | <code>string</code> | <p>Enter any descriptive text that helps you to identify the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration">InputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType">InputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration">OutputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode">OutputLockingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName"></a>

```csharp
public string ChannelGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}.

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

<p>Enter any descriptive text that helps you to identify the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#description Mediapackagev2Channel#description}

---

##### `InputSwitchConfiguration`<sup>Optional</sup> <a name="InputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration"></a>

```csharp
public Mediapackagev2ChannelInputSwitchConfiguration InputSwitchConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#input_switch_configuration Mediapackagev2Channel#input_switch_configuration}

---

##### `InputType`<sup>Optional</sup> <a name="InputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType"></a>

```csharp
public string InputType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}.

---

##### `OutputHeaderConfiguration`<sup>Optional</sup> <a name="OutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration"></a>

```csharp
public Mediapackagev2ChannelOutputHeaderConfiguration OutputHeaderConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#output_header_configuration Mediapackagev2Channel#output_header_configuration}

---

##### `OutputLockingMode`<sup>Optional</sup> <a name="OutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode"></a>

```csharp
public string OutputLockingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags"></a>

```csharp
public IResolvable|Mediapackagev2ChannelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}.

---

### Mediapackagev2ChannelIngestEndpoints <a name="Mediapackagev2ChannelIngestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelIngestEndpoints {

};
```


### Mediapackagev2ChannelInputSwitchConfiguration <a name="Mediapackagev2ChannelInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelInputSwitchConfiguration {
    bool|IResolvable MqcsInputSwitching = null,
    double PreferredInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching">MqcsInputSwitching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput">PreferredInput</a></code> | <code>double</code> | <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. |

---

##### `MqcsInputSwitching`<sup>Optional</sup> <a name="MqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching"></a>

```csharp
public bool|IResolvable MqcsInputSwitching { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS.

Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#mqcs_input_switching Mediapackagev2Channel#mqcs_input_switching}

---

##### `PreferredInput`<sup>Optional</sup> <a name="PreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput"></a>

```csharp
public double PreferredInput { get; set; }
```

- *Type:* double

<p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores.

Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#preferred_input Mediapackagev2Channel#preferred_input}

---

### Mediapackagev2ChannelOutputHeaderConfiguration <a name="Mediapackagev2ChannelOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelOutputHeaderConfiguration {
    bool|IResolvable PublishMqcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs">PublishMqcs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. |

---

##### `PublishMqcs`<sup>Optional</sup> <a name="PublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs"></a>

```csharp
public bool|IResolvable PublishMqcs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN.

This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#publish_mqcs Mediapackagev2Channel#publish_mqcs}

---

### Mediapackagev2ChannelTags <a name="Mediapackagev2ChannelTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2ChannelIngestEndpointsList <a name="Mediapackagev2ChannelIngestEndpointsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelIngestEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get"></a>

```csharp
private Mediapackagev2ChannelIngestEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### Mediapackagev2ChannelIngestEndpointsOutputReference <a name="Mediapackagev2ChannelIngestEndpointsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelIngestEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue"></a>

```csharp
public Mediapackagev2ChannelIngestEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a>

---


### Mediapackagev2ChannelInputSwitchConfigurationOutputReference <a name="Mediapackagev2ChannelInputSwitchConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelInputSwitchConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching">ResetMqcsInputSwitching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput">ResetPreferredInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMqcsInputSwitching` <a name="ResetMqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching"></a>

```csharp
private void ResetMqcsInputSwitching()
```

##### `ResetPreferredInput` <a name="ResetPreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput"></a>

```csharp
private void ResetPreferredInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput">MqcsInputSwitchingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput">PreferredInputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching">MqcsInputSwitching</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput">PreferredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MqcsInputSwitchingInput`<sup>Optional</sup> <a name="MqcsInputSwitchingInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput"></a>

```csharp
public bool|IResolvable MqcsInputSwitchingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PreferredInputInput`<sup>Optional</sup> <a name="PreferredInputInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput"></a>

```csharp
public double PreferredInputInput { get; }
```

- *Type:* double

---

##### `MqcsInputSwitching`<sup>Required</sup> <a name="MqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching"></a>

```csharp
public bool|IResolvable MqcsInputSwitching { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PreferredInput`<sup>Required</sup> <a name="PreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput"></a>

```csharp
public double PreferredInput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Mediapackagev2ChannelInputSwitchConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---


### Mediapackagev2ChannelOutputHeaderConfigurationOutputReference <a name="Mediapackagev2ChannelOutputHeaderConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelOutputHeaderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs">ResetPublishMqcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublishMqcs` <a name="ResetPublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs"></a>

```csharp
private void ResetPublishMqcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput">PublishMqcsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs">PublishMqcs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishMqcsInput`<sup>Optional</sup> <a name="PublishMqcsInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput"></a>

```csharp
public bool|IResolvable PublishMqcsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PublishMqcs`<sup>Required</sup> <a name="PublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs"></a>

```csharp
public bool|IResolvable PublishMqcs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Mediapackagev2ChannelOutputHeaderConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---


### Mediapackagev2ChannelTagsList <a name="Mediapackagev2ChannelTagsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get"></a>

```csharp
private Mediapackagev2ChannelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue"></a>

```csharp
public IResolvable|Mediapackagev2ChannelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>[]

---


### Mediapackagev2ChannelTagsOutputReference <a name="Mediapackagev2ChannelTagsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Mediapackagev2ChannelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Mediapackagev2ChannelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>

---



