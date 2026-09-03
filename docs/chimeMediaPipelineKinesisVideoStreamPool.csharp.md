# `chimeMediaPipelineKinesisVideoStreamPool` Submodule <a name="`chimeMediaPipelineKinesisVideoStreamPool` Submodule" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeMediaPipelineKinesisVideoStreamPool <a name="ChimeMediaPipelineKinesisVideoStreamPool" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool awscc_chime_media_pipeline_kinesis_video_stream_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPool(Construct Scope, string Id, ChimeMediaPipelineKinesisVideoStreamPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig">ChimeMediaPipelineKinesisVideoStreamPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig">ChimeMediaPipelineKinesisVideoStreamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration">PutStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamConfiguration` <a name="PutStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration"></a>

```csharp
private void PutStreamConfiguration(ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putStreamConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags"></a>

```csharp
private void PutTags(IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeMediaPipelineKinesisVideoStreamPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeMediaPipelineKinesisVideoStreamPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeMediaPipelineKinesisVideoStreamPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeMediaPipelineKinesisVideoStreamPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeMediaPipelineKinesisVideoStreamPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeMediaPipelineKinesisVideoStreamPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeMediaPipelineKinesisVideoStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeMediaPipelineKinesisVideoStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus">PoolStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration">StreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput">PoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput">StreamConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `PoolStatus`<sup>Required</sup> <a name="PoolStatus" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolStatus"></a>

```csharp
public string PoolStatus { get; }
```

- *Type:* string

---

##### `StreamConfiguration`<sup>Required</sup> <a name="StreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfiguration"></a>

```csharp
public ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference StreamConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tags"></a>

```csharp
public ChimeMediaPipelineKinesisVideoStreamPoolTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList">ChimeMediaPipelineKinesisVideoStreamPoolTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.updatedTimestamp"></a>

```csharp
public string UpdatedTimestamp { get; }
```

- *Type:* string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolNameInput"></a>

```csharp
public string PoolNameInput { get; }
```

- *Type:* string

---

##### `StreamConfigurationInput`<sup>Optional</sup> <a name="StreamConfigurationInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.streamConfigurationInput"></a>

```csharp
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration StreamConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tagsInput"></a>

```csharp
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolConfig <a name="ChimeMediaPipelineKinesisVideoStreamPoolConfig" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PoolName,
    ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration StreamConfiguration,
    IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName">PoolName</a></code> | <code>string</code> | The name of the Kinesis Video Stream Pool. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration">StreamConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | The configuration settings for the Kinesis video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]</code> | The tags associated with the Kinesis Video Stream Pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.poolName"></a>

```csharp
public string PoolName { get; set; }
```

- *Type:* string

The name of the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#pool_name ChimeMediaPipelineKinesisVideoStreamPool#pool_name}

---

##### `StreamConfiguration`<sup>Required</sup> <a name="StreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.streamConfiguration"></a>

```csharp
public ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration StreamConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

The configuration settings for the Kinesis video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#stream_configuration ChimeMediaPipelineKinesisVideoStreamPool#stream_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolConfig.property.tags"></a>

```csharp
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

The tags associated with the Kinesis Video Stream Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#tags ChimeMediaPipelineKinesisVideoStreamPool#tags}

---

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration {
    string Region,
    double DataRetentionInHours = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region">Region</a></code> | <code>string</code> | The AWS Region of the video stream. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours">DataRetentionInHours</a></code> | <code>double</code> | The amount of time that data is retained, in hours. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS Region of the video stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#region ChimeMediaPipelineKinesisVideoStreamPool#region}

---

##### `DataRetentionInHours`<sup>Optional</sup> <a name="DataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration.property.dataRetentionInHours"></a>

```csharp
public double DataRetentionInHours { get; set; }
```

- *Type:* double

The amount of time that data is retained, in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#data_retention_in_hours ChimeMediaPipelineKinesisVideoStreamPool#data_retention_in_hours}

---

### ChimeMediaPipelineKinesisVideoStreamPoolTags <a name="ChimeMediaPipelineKinesisVideoStreamPoolTags" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPoolTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#key ChimeMediaPipelineKinesisVideoStreamPool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/chime_media_pipeline_kinesis_video_stream_pool#value ChimeMediaPipelineKinesisVideoStreamPool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours">ResetDataRetentionInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataRetentionInHours` <a name="ResetDataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.resetDataRetentionInHours"></a>

```csharp
private void ResetDataRetentionInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput">DataRetentionInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours">DataRetentionInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataRetentionInHoursInput`<sup>Optional</sup> <a name="DataRetentionInHoursInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHoursInput"></a>

```csharp
public double DataRetentionInHoursInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DataRetentionInHours`<sup>Required</sup> <a name="DataRetentionInHours" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.dataRetentionInHours"></a>

```csharp
public double DataRetentionInHours { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration">ChimeMediaPipelineKinesisVideoStreamPoolStreamConfiguration</a>

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsList <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsList" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPoolTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get"></a>

```csharp
private ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsList.property.internalValue"></a>

```csharp
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>[]

---


### ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference <a name="ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeMediaPipelineKinesisVideoStreamPoolTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeMediaPipelineKinesisVideoStreamPool.ChimeMediaPipelineKinesisVideoStreamPoolTags">ChimeMediaPipelineKinesisVideoStreamPoolTags</a>

---



