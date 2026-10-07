# `mediaconnectFlowMediaStream` Submodule <a name="`mediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowMediaStream <a name="MediaconnectFlowMediaStream" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStream(Construct Scope, string Id, MediaconnectFlowMediaStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig">MediaconnectFlowMediaStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig">MediaconnectFlowMediaStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate">ResetClockRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat">ResetVideoFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes"></a>

```csharp
private void PutAttributes(MediaconnectFlowMediaStreamAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags"></a>

```csharp
private void PutTags(IResolvable|MediaconnectFlowMediaStreamTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetClockRate` <a name="ResetClockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate"></a>

```csharp
private void ResetClockRate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVideoFormat` <a name="ResetVideoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat"></a>

```csharp
private void ResetVideoFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowMediaStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowMediaStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowMediaStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlowMediaStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlowMediaStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt">Fmt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput">ClockRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput">FlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput">MediaStreamIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput">MediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput">MediaStreamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput">VideoFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate">ClockRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId">MediaStreamId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType">MediaStreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat">VideoFormat</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes"></a>

```csharp
public MediaconnectFlowMediaStreamAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `Fmt`<sup>Required</sup> <a name="Fmt" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt"></a>

```csharp
public double Fmt { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags"></a>

```csharp
public MediaconnectFlowMediaStreamTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamAttributes AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `ClockRateInput`<sup>Optional</sup> <a name="ClockRateInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput"></a>

```csharp
public double ClockRateInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput"></a>

```csharp
public string FlowArnInput { get; }
```

- *Type:* string

---

##### `MediaStreamIdInput`<sup>Optional</sup> <a name="MediaStreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput"></a>

```csharp
public double MediaStreamIdInput { get; }
```

- *Type:* double

---

##### `MediaStreamNameInput`<sup>Optional</sup> <a name="MediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput"></a>

```csharp
public string MediaStreamNameInput { get; }
```

- *Type:* string

---

##### `MediaStreamTypeInput`<sup>Optional</sup> <a name="MediaStreamTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput"></a>

```csharp
public string MediaStreamTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

---

##### `VideoFormatInput`<sup>Optional</sup> <a name="VideoFormatInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput"></a>

```csharp
public string VideoFormatInput { get; }
```

- *Type:* string

---

##### `ClockRate`<sup>Required</sup> <a name="ClockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate"></a>

```csharp
public double ClockRate { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `MediaStreamId`<sup>Required</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId"></a>

```csharp
public double MediaStreamId { get; }
```

- *Type:* double

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; }
```

- *Type:* string

---

##### `MediaStreamType`<sup>Required</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType"></a>

```csharp
public string MediaStreamType { get; }
```

- *Type:* string

---

##### `VideoFormat`<sup>Required</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat"></a>

```csharp
public string VideoFormat { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowMediaStreamAttributes <a name="MediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamAttributes {
    MediaconnectFlowMediaStreamAttributesFmtp Fmtp = null,
    string Lang = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang">Lang</a></code> | <code>string</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `Fmtp`<sup>Optional</sup> <a name="Fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp"></a>

```csharp
public MediaconnectFlowMediaStreamAttributesFmtp Fmtp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#fmtp MediaconnectFlowMediaStream#fmtp}

---

##### `Lang`<sup>Optional</sup> <a name="Lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang"></a>

```csharp
public string Lang { get; set; }
```

- *Type:* string

The audio language, in a format that is recognized by the receiver.

Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#lang MediaconnectFlowMediaStream#lang}

---

### MediaconnectFlowMediaStreamAttributesFmtp <a name="MediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamAttributesFmtp {
    string ChannelOrder = null,
    string Colorimetry = null,
    string ExactFramerate = null,
    string Par = null,
    string Range = null,
    string ScanMode = null,
    string Tcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder">ChannelOrder</a></code> | <code>string</code> | The format of the audio channel. Can only be specified for an audio media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry">Colorimetry</a></code> | <code>string</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate">ExactFramerate</a></code> | <code>string</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par">Par</a></code> | <code>string</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range">Range</a></code> | <code>string</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode">ScanMode</a></code> | <code>string</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs">Tcs</a></code> | <code>string</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `ChannelOrder`<sup>Optional</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder"></a>

```csharp
public string ChannelOrder { get; set; }
```

- *Type:* string

The format of the audio channel. Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#channel_order MediaconnectFlowMediaStream#channel_order}

---

##### `Colorimetry`<sup>Optional</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry"></a>

```csharp
public string Colorimetry { get; set; }
```

- *Type:* string

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#colorimetry MediaconnectFlowMediaStream#colorimetry}

---

##### `ExactFramerate`<sup>Optional</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate"></a>

```csharp
public string ExactFramerate { get; set; }
```

- *Type:* string

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#exact_framerate MediaconnectFlowMediaStream#exact_framerate}

---

##### `Par`<sup>Optional</sup> <a name="Par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par"></a>

```csharp
public string Par { get; set; }
```

- *Type:* string

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#par MediaconnectFlowMediaStream#par}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#range MediaconnectFlowMediaStream#range}

---

##### `ScanMode`<sup>Optional</sup> <a name="ScanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode"></a>

```csharp
public string ScanMode { get; set; }
```

- *Type:* string

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#scan_mode MediaconnectFlowMediaStream#scan_mode}

---

##### `Tcs`<sup>Optional</sup> <a name="Tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs"></a>

```csharp
public string Tcs { get; set; }
```

- *Type:* string

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tcs MediaconnectFlowMediaStream#tcs}

---

### MediaconnectFlowMediaStreamConfig <a name="MediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FlowArn,
    double MediaStreamId,
    string MediaStreamName,
    string MediaStreamType,
    MediaconnectFlowMediaStreamAttributes Attributes = null,
    double ClockRate = null,
    string Description = null,
    IResolvable|MediaconnectFlowMediaStreamTags[] Tags = null,
    string VideoFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn">FlowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the flow that the media stream belongs to. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId">MediaStreamId</a></code> | <code>double</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType">MediaStreamType</a></code> | <code>string</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate">ClockRate</a></code> | <code>double</code> | The sample rate (in Hz) for the stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description">Description</a></code> | <code>string</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]</code> | The key-value pairs that can be used to tag and organize the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat">VideoFormat</a></code> | <code>string</code> | The resolution of the video. Required for a video media stream and rejected for other media stream types. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn"></a>

```csharp
public string FlowArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the flow that the media stream belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#flow_arn MediaconnectFlowMediaStream#flow_arn}

---

##### `MediaStreamId`<sup>Required</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId"></a>

```csharp
public double MediaStreamId { get; set; }
```

- *Type:* double

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id MediaconnectFlowMediaStream#media_stream_id}

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; set; }
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name MediaconnectFlowMediaStream#media_stream_name}

---

##### `MediaStreamType`<sup>Required</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType"></a>

```csharp
public string MediaStreamType { get; set; }
```

- *Type:* string

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type MediaconnectFlowMediaStream#media_stream_type}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes"></a>

```csharp
public MediaconnectFlowMediaStreamAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#attributes MediaconnectFlowMediaStream#attributes}

---

##### `ClockRate`<sup>Optional</sup> <a name="ClockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate"></a>

```csharp
public double ClockRate { get; set; }
```

- *Type:* double

The sample rate (in Hz) for the stream.

If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#clock_rate MediaconnectFlowMediaStream#clock_rate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#description MediaconnectFlowMediaStream#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

The key-value pairs that can be used to tag and organize the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tags MediaconnectFlowMediaStream#tags}

---

##### `VideoFormat`<sup>Optional</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat"></a>

```csharp
public string VideoFormat { get; set; }
```

- *Type:* string

The resolution of the video. Required for a video media stream and rejected for other media stream types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#video_format MediaconnectFlowMediaStream#video_format}

---

### MediaconnectFlowMediaStreamTags <a name="MediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#key MediaconnectFlowMediaStream#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#value MediaconnectFlowMediaStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamAttributesFmtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder">ResetChannelOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry">ResetColorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate">ResetExactFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar">ResetPar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode">ResetScanMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs">ResetTcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelOrder` <a name="ResetChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder"></a>

```csharp
private void ResetChannelOrder()
```

##### `ResetColorimetry` <a name="ResetColorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry"></a>

```csharp
private void ResetColorimetry()
```

##### `ResetExactFramerate` <a name="ResetExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate"></a>

```csharp
private void ResetExactFramerate()
```

##### `ResetPar` <a name="ResetPar" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar"></a>

```csharp
private void ResetPar()
```

##### `ResetRange` <a name="ResetRange" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetScanMode` <a name="ResetScanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode"></a>

```csharp
private void ResetScanMode()
```

##### `ResetTcs` <a name="ResetTcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs"></a>

```csharp
private void ResetTcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput">ChannelOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput">ColorimetryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput">ExactFramerateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput">ParInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput">ScanModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput">TcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">ChannelOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">Colorimetry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">ExactFramerate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">Par</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">ScanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">Tcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelOrderInput`<sup>Optional</sup> <a name="ChannelOrderInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput"></a>

```csharp
public string ChannelOrderInput { get; }
```

- *Type:* string

---

##### `ColorimetryInput`<sup>Optional</sup> <a name="ColorimetryInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput"></a>

```csharp
public string ColorimetryInput { get; }
```

- *Type:* string

---

##### `ExactFramerateInput`<sup>Optional</sup> <a name="ExactFramerateInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```csharp
public string ExactFramerateInput { get; }
```

- *Type:* string

---

##### `ParInput`<sup>Optional</sup> <a name="ParInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput"></a>

```csharp
public string ParInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `ScanModeInput`<sup>Optional</sup> <a name="ScanModeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput"></a>

```csharp
public string ScanModeInput { get; }
```

- *Type:* string

---

##### `TcsInput`<sup>Optional</sup> <a name="TcsInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput"></a>

```csharp
public string TcsInput { get; }
```

- *Type:* string

---

##### `ChannelOrder`<sup>Required</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```csharp
public string ChannelOrder { get; }
```

- *Type:* string

---

##### `Colorimetry`<sup>Required</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```csharp
public string Colorimetry { get; }
```

- *Type:* string

---

##### `ExactFramerate`<sup>Required</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```csharp
public string ExactFramerate { get; }
```

- *Type:* string

---

##### `Par`<sup>Required</sup> <a name="Par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```csharp
public string Par { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```csharp
public string ScanMode { get; }
```

- *Type:* string

---

##### `Tcs`<sup>Required</sup> <a name="Tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```csharp
public string Tcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamAttributesFmtp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamAttributesOutputReference <a name="MediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp">PutFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp">ResetFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang">ResetLang</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFmtp` <a name="PutFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp"></a>

```csharp
private void PutFmtp(MediaconnectFlowMediaStreamAttributesFmtp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `ResetFmtp` <a name="ResetFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp"></a>

```csharp
private void ResetFmtp()
```

##### `ResetLang` <a name="ResetLang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang"></a>

```csharp
private void ResetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput">FmtpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput">LangInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang">Lang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fmtp`<sup>Required</sup> <a name="Fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```csharp
public MediaconnectFlowMediaStreamAttributesFmtpOutputReference Fmtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `FmtpInput`<sup>Optional</sup> <a name="FmtpInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamAttributesFmtp FmtpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `LangInput`<sup>Optional</sup> <a name="LangInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput"></a>

```csharp
public string LangInput { get; }
```

- *Type:* string

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```csharp
public string Lang { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---


### MediaconnectFlowMediaStreamTagsList <a name="MediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get"></a>

```csharp
private MediaconnectFlowMediaStreamTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>[]

---


### MediaconnectFlowMediaStreamTagsOutputReference <a name="MediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>

---



