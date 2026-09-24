# `chimeChannel` Submodule <a name="`chimeChannel` Submodule" id="@cdktn/provider-awscc.chimeChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannel <a name="ChimeChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel awscc_chime_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannel(Construct Scope, string Id, ChimeChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig">ChimeChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig">ChimeChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration">PutElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings">PutExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration">ResetElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings">ResetExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns">ResetMemberArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns">ResetModeratorArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy">ResetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutElasticChannelConfiguration` <a name="PutElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration"></a>

```csharp
private void PutElasticChannelConfiguration(ChimeChannelElasticChannelConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putElasticChannelConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `PutExpirationSettings` <a name="PutExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings"></a>

```csharp
private void PutExpirationSettings(ChimeChannelExpirationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putExpirationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags"></a>

```csharp
private void PutTags(IResolvable|ChimeChannelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

---

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetChannelId"></a>

```csharp
private void ResetChannelId()
```

##### `ResetElasticChannelConfiguration` <a name="ResetElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetElasticChannelConfiguration"></a>

```csharp
private void ResetElasticChannelConfiguration()
```

##### `ResetExpirationSettings` <a name="ResetExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetExpirationSettings"></a>

```csharp
private void ResetExpirationSettings()
```

##### `ResetMemberArns` <a name="ResetMemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMemberArns"></a>

```csharp
private void ResetMemberArns()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetModeratorArns` <a name="ResetModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetModeratorArns"></a>

```csharp
private void ResetModeratorArns()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetPrivacy"></a>

```csharp
private void ResetPrivacy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn">ChannelFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration">ElasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings">ExpirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp">LastMessageTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput">AppInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput">ChimeBearerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput">ElasticChannelConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput">ExpirationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput">MemberArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput">ModeratorArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput">PrivacyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer">ChimeBearer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns">MemberArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns">ModeratorArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy">Privacy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChannelFlowArn`<sup>Required</sup> <a name="ChannelFlowArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelFlowArn"></a>

```csharp
public string ChannelFlowArn { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdBy"></a>

```csharp
public ChimeChannelCreatedByOutputReference CreatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference">ChimeChannelCreatedByOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `ElasticChannelConfiguration`<sup>Required</sup> <a name="ElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfiguration"></a>

```csharp
public ChimeChannelElasticChannelConfigurationOutputReference ElasticChannelConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference">ChimeChannelElasticChannelConfigurationOutputReference</a>

---

##### `ExpirationSettings`<sup>Required</sup> <a name="ExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettings"></a>

```csharp
public ChimeChannelExpirationSettingsOutputReference ExpirationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference">ChimeChannelExpirationSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastMessageTimestamp`<sup>Required</sup> <a name="LastMessageTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastMessageTimestamp"></a>

```csharp
public string LastMessageTimestamp { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tags"></a>

```csharp
public ChimeChannelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList">ChimeChannelTagsList</a>

---

##### `AppInstanceArnInput`<sup>Optional</sup> <a name="AppInstanceArnInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArnInput"></a>

```csharp
public string AppInstanceArnInput { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChimeBearerInput`<sup>Optional</sup> <a name="ChimeBearerInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearerInput"></a>

```csharp
public string ChimeBearerInput { get; }
```

- *Type:* string

---

##### `ElasticChannelConfigurationInput`<sup>Optional</sup> <a name="ElasticChannelConfigurationInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.elasticChannelConfigurationInput"></a>

```csharp
public IResolvable|ChimeChannelElasticChannelConfiguration ElasticChannelConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---

##### `ExpirationSettingsInput`<sup>Optional</sup> <a name="ExpirationSettingsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.expirationSettingsInput"></a>

```csharp
public IResolvable|ChimeChannelExpirationSettings ExpirationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---

##### `MemberArnsInput`<sup>Optional</sup> <a name="MemberArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArnsInput"></a>

```csharp
public string[] MemberArnsInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ModeratorArnsInput`<sup>Optional</sup> <a name="ModeratorArnsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArnsInput"></a>

```csharp
public string[] ModeratorArnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacyInput"></a>

```csharp
public string PrivacyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tagsInput"></a>

```csharp
public IResolvable|ChimeChannelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; }
```

- *Type:* string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChimeBearer`<sup>Required</sup> <a name="ChimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.chimeBearer"></a>

```csharp
public string ChimeBearer { get; }
```

- *Type:* string

---

##### `MemberArns`<sup>Required</sup> <a name="MemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.memberArns"></a>

```csharp
public string[] MemberArns { get; }
```

- *Type:* string[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ModeratorArns`<sup>Required</sup> <a name="ModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.moderatorArns"></a>

```csharp
public string[] ModeratorArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.privacy"></a>

```csharp
public string Privacy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeChannel.ChimeChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelConfig <a name="ChimeChannelConfig" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppInstanceArn,
    string ChimeBearer,
    string Name,
    string ChannelId = null,
    ChimeChannelElasticChannelConfiguration ElasticChannelConfiguration = null,
    ChimeChannelExpirationSettings ExpirationSettings = null,
    string[] MemberArns = null,
    string Metadata = null,
    string Mode = null,
    string[] ModeratorArns = null,
    string Privacy = null,
    IResolvable|ChimeChannelTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | The ARN of the AppInstance that contains the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer">ChimeBearer</a></code> | <code>string</code> | The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name">Name</a></code> | <code>string</code> | The name of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId">ChannelId</a></code> | <code>string</code> | The ID of the channel. When omitted, the service generates a UUID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration">ElasticChannelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | The attributes required to configure and create an elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings">ExpirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | Settings that control the interval after which the channel is automatically deleted. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns">MemberArns</a></code> | <code>string[]</code> | The ARNs of the AppInstanceUsers to add to the channel as members when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata">Metadata</a></code> | <code>string</code> | The metadata of the channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode">Mode</a></code> | <code>string</code> | The channel mode. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns">ModeratorArns</a></code> | <code>string[]</code> | The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy">Privacy</a></code> | <code>string</code> | The channel's privacy level. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]</code> | The tags for the channel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; set; }
```

- *Type:* string

The ARN of the AppInstance that contains the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#app_instance_arn ChimeChannel#app_instance_arn}

---

##### `ChimeBearer`<sup>Required</sup> <a name="ChimeBearer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.chimeBearer"></a>

```csharp
public string ChimeBearer { get; set; }
```

- *Type:* string

The ARN of the AppInstanceUser or AppInstanceBot that performs every operation on this channel.

Whichever of the two creates a channel automatically becomes one of its moderators, so the same ARN can subsequently read, update and delete the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#chime_bearer ChimeChannel#chime_bearer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#name ChimeChannel#name}

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

The ID of the channel. When omitted, the service generates a UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#channel_id ChimeChannel#channel_id}

---

##### `ElasticChannelConfiguration`<sup>Optional</sup> <a name="ElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.elasticChannelConfiguration"></a>

```csharp
public ChimeChannelElasticChannelConfiguration ElasticChannelConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

The attributes required to configure and create an elastic channel.

An elastic channel must use RESTRICTED mode, cannot be created with MemberArns, and is available only in some regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#elastic_channel_configuration ChimeChannel#elastic_channel_configuration}

---

##### `ExpirationSettings`<sup>Optional</sup> <a name="ExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.expirationSettings"></a>

```csharp
public ChimeChannelExpirationSettings ExpirationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

Settings that control the interval after which the channel is automatically deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_settings ChimeChannel#expiration_settings}

---

##### `MemberArns`<sup>Optional</sup> <a name="MemberArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.memberArns"></a>

```csharp
public string[] MemberArns { get; set; }
```

- *Type:* string[]

The ARNs of the AppInstanceUsers to add to the channel as members when it is created.

Cannot be combined with ElasticChannelConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#member_arns ChimeChannel#member_arns}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

The metadata of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#metadata ChimeChannel#metadata}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The channel mode.

In an UNRESTRICTED channel, members can add themselves and other members; in a RESTRICTED channel, only administrators and moderators can add members. An elastic channel must be RESTRICTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#mode ChimeChannel#mode}

---

##### `ModeratorArns`<sup>Optional</sup> <a name="ModeratorArns" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.moderatorArns"></a>

```csharp
public string[] ModeratorArns { get; set; }
```

- *Type:* string[]

The ARNs of the AppInstanceUsers to add to the channel as moderators when it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#moderator_arns ChimeChannel#moderator_arns}

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.privacy"></a>

```csharp
public string Privacy { get; set; }
```

- *Type:* string

The channel's privacy level.

A PUBLIC channel is discoverable by anyone in the AppInstance; a PRIVATE channel is not. Privacy cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#privacy ChimeChannel#privacy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelConfig.property.tags"></a>

```csharp
public IResolvable|ChimeChannelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

The tags for the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#tags ChimeChannel#tags}

---

### ChimeChannelCreatedBy <a name="ChimeChannelCreatedBy" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelCreatedBy {

};
```


### ChimeChannelElasticChannelConfiguration <a name="ChimeChannelElasticChannelConfiguration" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelElasticChannelConfiguration {
    double MaximumSubChannels = null,
    double MinimumMembershipPercentage = null,
    double TargetMembershipsPerSubChannel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels">MaximumSubChannels</a></code> | <code>double</code> | The maximum number of SubChannels allowed in the elastic channel. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage">MinimumMembershipPercentage</a></code> | <code>double</code> | The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel">TargetMembershipsPerSubChannel</a></code> | <code>double</code> | The maximum number of members allowed in a SubChannel. |

---

##### `MaximumSubChannels`<sup>Optional</sup> <a name="MaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.maximumSubChannels"></a>

```csharp
public double MaximumSubChannels { get; set; }
```

- *Type:* double

The maximum number of SubChannels allowed in the elastic channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#maximum_sub_channels ChimeChannel#maximum_sub_channels}

---

##### `MinimumMembershipPercentage`<sup>Optional</sup> <a name="MinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.minimumMembershipPercentage"></a>

```csharp
public double MinimumMembershipPercentage { get; set; }
```

- *Type:* double

The minimum allowed percentage of TargetMembershipsPerSubChannel users, used to balance members across SubChannels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#minimum_membership_percentage ChimeChannel#minimum_membership_percentage}

---

##### `TargetMembershipsPerSubChannel`<sup>Optional</sup> <a name="TargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration.property.targetMembershipsPerSubChannel"></a>

```csharp
public double TargetMembershipsPerSubChannel { get; set; }
```

- *Type:* double

The maximum number of members allowed in a SubChannel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#target_memberships_per_sub_channel ChimeChannel#target_memberships_per_sub_channel}

---

### ChimeChannelExpirationSettings <a name="ChimeChannelExpirationSettings" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelExpirationSettings {
    string ExpirationCriterion = null,
    double ExpirationDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion">ExpirationCriterion</a></code> | <code>string</code> | The condition the expiration period is measured from. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays">ExpirationDays</a></code> | <code>double</code> | The period in days after which the system automatically deletes the channel. |

---

##### `ExpirationCriterion`<sup>Optional</sup> <a name="ExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationCriterion"></a>

```csharp
public string ExpirationCriterion { get; set; }
```

- *Type:* string

The condition the expiration period is measured from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_criterion ChimeChannel#expiration_criterion}

---

##### `ExpirationDays`<sup>Optional</sup> <a name="ExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings.property.expirationDays"></a>

```csharp
public double ExpirationDays { get; set; }
```

- *Type:* double

The period in days after which the system automatically deletes the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#expiration_days ChimeChannel#expiration_days}

---

### ChimeChannelTags <a name="ChimeChannelTags" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key">Key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value">Value</a></code> | <code>string</code> | The value in a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#key ChimeChannel#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/chime_channel#value ChimeChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelCreatedByOutputReference <a name="ChimeChannelCreatedByOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedByOutputReference.property.internalValue"></a>

```csharp
public ChimeChannelCreatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelCreatedBy">ChimeChannelCreatedBy</a>

---


### ChimeChannelElasticChannelConfigurationOutputReference <a name="ChimeChannelElasticChannelConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelElasticChannelConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels">ResetMaximumSubChannels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage">ResetMinimumMembershipPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel">ResetTargetMembershipsPerSubChannel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumSubChannels` <a name="ResetMaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMaximumSubChannels"></a>

```csharp
private void ResetMaximumSubChannels()
```

##### `ResetMinimumMembershipPercentage` <a name="ResetMinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetMinimumMembershipPercentage"></a>

```csharp
private void ResetMinimumMembershipPercentage()
```

##### `ResetTargetMembershipsPerSubChannel` <a name="ResetTargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.resetTargetMembershipsPerSubChannel"></a>

```csharp
private void ResetTargetMembershipsPerSubChannel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput">MaximumSubChannelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput">MinimumMembershipPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput">TargetMembershipsPerSubChannelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels">MaximumSubChannels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage">MinimumMembershipPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel">TargetMembershipsPerSubChannel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumSubChannelsInput`<sup>Optional</sup> <a name="MaximumSubChannelsInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannelsInput"></a>

```csharp
public double MaximumSubChannelsInput { get; }
```

- *Type:* double

---

##### `MinimumMembershipPercentageInput`<sup>Optional</sup> <a name="MinimumMembershipPercentageInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentageInput"></a>

```csharp
public double MinimumMembershipPercentageInput { get; }
```

- *Type:* double

---

##### `TargetMembershipsPerSubChannelInput`<sup>Optional</sup> <a name="TargetMembershipsPerSubChannelInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannelInput"></a>

```csharp
public double TargetMembershipsPerSubChannelInput { get; }
```

- *Type:* double

---

##### `MaximumSubChannels`<sup>Required</sup> <a name="MaximumSubChannels" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.maximumSubChannels"></a>

```csharp
public double MaximumSubChannels { get; }
```

- *Type:* double

---

##### `MinimumMembershipPercentage`<sup>Required</sup> <a name="MinimumMembershipPercentage" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.minimumMembershipPercentage"></a>

```csharp
public double MinimumMembershipPercentage { get; }
```

- *Type:* double

---

##### `TargetMembershipsPerSubChannel`<sup>Required</sup> <a name="TargetMembershipsPerSubChannel" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.targetMembershipsPerSubChannel"></a>

```csharp
public double TargetMembershipsPerSubChannel { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelElasticChannelConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelElasticChannelConfiguration">ChimeChannelElasticChannelConfiguration</a>

---


### ChimeChannelExpirationSettingsOutputReference <a name="ChimeChannelExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelExpirationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion">ResetExpirationCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays">ResetExpirationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationCriterion` <a name="ResetExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```csharp
private void ResetExpirationCriterion()
```

##### `ResetExpirationDays` <a name="ResetExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.resetExpirationDays"></a>

```csharp
private void ResetExpirationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput">ExpirationCriterionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput">ExpirationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion">ExpirationCriterion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays">ExpirationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationCriterionInput`<sup>Optional</sup> <a name="ExpirationCriterionInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```csharp
public string ExpirationCriterionInput { get; }
```

- *Type:* string

---

##### `ExpirationDaysInput`<sup>Optional</sup> <a name="ExpirationDaysInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```csharp
public double ExpirationDaysInput { get; }
```

- *Type:* double

---

##### `ExpirationCriterion`<sup>Required</sup> <a name="ExpirationCriterion" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationCriterion"></a>

```csharp
public string ExpirationCriterion { get; }
```

- *Type:* string

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.expirationDays"></a>

```csharp
public double ExpirationDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelExpirationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelExpirationSettings">ChimeChannelExpirationSettings</a>

---


### ChimeChannelTagsList <a name="ChimeChannelTagsList" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get"></a>

```csharp
private ChimeChannelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsList.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>[]

---


### ChimeChannelTagsOutputReference <a name="ChimeChannelTagsOutputReference" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannel.ChimeChannelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannel.ChimeChannelTags">ChimeChannelTags</a>

---



