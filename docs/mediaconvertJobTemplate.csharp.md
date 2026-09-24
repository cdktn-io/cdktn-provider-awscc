# `mediaconvertJobTemplate` Submodule <a name="`mediaconvertJobTemplate` Submodule" id="@cdktn/provider-awscc.mediaconvertJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertJobTemplate <a name="MediaconvertJobTemplate" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template awscc_mediaconvert_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplate(Construct Scope, string Id, MediaconvertJobTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig">MediaconvertJobTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig">MediaconvertJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings">PutAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations">PutHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings">ResetAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations">ResetHopDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue">ResetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval">ResetStatusUpdateInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccelerationSettings` <a name="PutAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings"></a>

```csharp
private void PutAccelerationSettings(MediaconvertJobTemplateAccelerationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putAccelerationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `PutHopDestinations` <a name="PutHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations"></a>

```csharp
private void PutHopDestinations(IResolvable|MediaconvertJobTemplateHopDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.putHopDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

---

##### `ResetAccelerationSettings` <a name="ResetAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetAccelerationSettings"></a>

```csharp
private void ResetAccelerationSettings()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHopDestinations` <a name="ResetHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetHopDestinations"></a>

```csharp
private void ResetHopDestinations()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetQueue` <a name="ResetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetQueue"></a>

```csharp
private void ResetQueue()
```

##### `ResetStatusUpdateInterval` <a name="ResetStatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetStatusUpdateInterval"></a>

```csharp
private void ResetStatusUpdateInterval()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertJobTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertJobTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertJobTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertJobTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconvertJobTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconvertJobTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconvertJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings">AccelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations">HopDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput">AccelerationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput">HopDestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput">QueueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput">SettingsJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput">StatusUpdateIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue">Queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson">SettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval">StatusUpdateInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccelerationSettings`<sup>Required</sup> <a name="AccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettings"></a>

```csharp
public MediaconvertJobTemplateAccelerationSettingsOutputReference AccelerationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference">MediaconvertJobTemplateAccelerationSettingsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HopDestinations`<sup>Required</sup> <a name="HopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinations"></a>

```csharp
public MediaconvertJobTemplateHopDestinationsList HopDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList">MediaconvertJobTemplateHopDestinationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccelerationSettingsInput`<sup>Optional</sup> <a name="AccelerationSettingsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.accelerationSettingsInput"></a>

```csharp
public IResolvable|MediaconvertJobTemplateAccelerationSettings AccelerationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HopDestinationsInput`<sup>Optional</sup> <a name="HopDestinationsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.hopDestinationsInput"></a>

```csharp
public IResolvable|MediaconvertJobTemplateHopDestinations[] HopDestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queueInput"></a>

```csharp
public string QueueInput { get; }
```

- *Type:* string

---

##### `SettingsJsonInput`<sup>Optional</sup> <a name="SettingsJsonInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJsonInput"></a>

```csharp
public string SettingsJsonInput { get; }
```

- *Type:* string

---

##### `StatusUpdateIntervalInput`<sup>Optional</sup> <a name="StatusUpdateIntervalInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateIntervalInput"></a>

```csharp
public string StatusUpdateIntervalInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.queue"></a>

```csharp
public string Queue { get; }
```

- *Type:* string

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.settingsJson"></a>

```csharp
public string SettingsJson { get; }
```

- *Type:* string

---

##### `StatusUpdateInterval`<sup>Required</sup> <a name="StatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.statusUpdateInterval"></a>

```csharp
public string StatusUpdateInterval { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertJobTemplateAccelerationSettings <a name="MediaconvertJobTemplateAccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplateAccelerationSettings {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode">Mode</a></code> | <code>string</code> | Specify the conditions when the service will run your job with accelerated transcoding. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specify the conditions when the service will run your job with accelerated transcoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#mode MediaconvertJobTemplate#mode}

---

### MediaconvertJobTemplateConfig <a name="MediaconvertJobTemplateConfig" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SettingsJson,
    MediaconvertJobTemplateAccelerationSettings AccelerationSettings = null,
    string Category = null,
    string Description = null,
    IResolvable|MediaconvertJobTemplateHopDestinations[] HopDestinations = null,
    string Name = null,
    double Priority = null,
    string Queue = null,
    string StatusUpdateInterval = null,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson">SettingsJson</a></code> | <code>string</code> | Specify, in JSON format, the transcoding job settings for this job template. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings">AccelerationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | Accelerated transcoding can significantly speed up jobs with long, visually complex content. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category">Category</a></code> | <code>string</code> | Optional. A category for the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description">Description</a></code> | <code>string</code> | Optional. A description of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations">HopDestinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the job template you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority">Priority</a></code> | <code>double</code> | Specify the relative priority for this job. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue">Queue</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval">StatusUpdateInterval</a></code> | <code>string</code> | Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags">Tags</a></code> | <code>string</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.settingsJson"></a>

```csharp
public string SettingsJson { get; set; }
```

- *Type:* string

Specify, in JSON format, the transcoding job settings for this job template.

This specification must conform to the AWS Elemental MediaConvert job validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#settings_json MediaconvertJobTemplate#settings_json}

---

##### `AccelerationSettings`<sup>Optional</sup> <a name="AccelerationSettings" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.accelerationSettings"></a>

```csharp
public MediaconvertJobTemplateAccelerationSettings AccelerationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

Accelerated transcoding can significantly speed up jobs with long, visually complex content.

Outputs that use this feature incur pro-tier pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#acceleration_settings MediaconvertJobTemplate#acceleration_settings}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Optional. A category for the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#category MediaconvertJobTemplate#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A description of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#description MediaconvertJobTemplate#description}

---

##### `HopDestinations`<sup>Optional</sup> <a name="HopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.hopDestinations"></a>

```csharp
public IResolvable|MediaconvertJobTemplateHopDestinations[] HopDestinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

Optional.

Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#hop_destinations MediaconvertJobTemplate#hop_destinations}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the job template you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#name MediaconvertJobTemplate#name}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Specify the relative priority for this job.

In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `Queue`<sup>Optional</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.queue"></a>

```csharp
public string Queue { get; set; }
```

- *Type:* string

Optional.

The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `StatusUpdateInterval`<sup>Optional</sup> <a name="StatusUpdateInterval" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.statusUpdateInterval"></a>

```csharp
public string StatusUpdateInterval { get; set; }
```

- *Type:* string

Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#status_update_interval MediaconvertJobTemplate#status_update_interval}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#tags MediaconvertJobTemplate#tags}

---

### MediaconvertJobTemplateHopDestinations <a name="MediaconvertJobTemplateHopDestinations" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplateHopDestinations {
    double Priority = null,
    string Queue = null,
    double WaitMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority">Priority</a></code> | <code>double</code> | Optional. A different relative priority for the job in the destination queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue">Queue</a></code> | <code>string</code> | Optional. The destination queue for queue hopping. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes">WaitMinutes</a></code> | <code>double</code> | Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. |

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Optional. A different relative priority for the job in the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#priority MediaconvertJobTemplate#priority}

---

##### `Queue`<sup>Optional</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.queue"></a>

```csharp
public string Queue { get; set; }
```

- *Type:* string

Optional. The destination queue for queue hopping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#queue MediaconvertJobTemplate#queue}

---

##### `WaitMinutes`<sup>Optional</sup> <a name="WaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations.property.waitMinutes"></a>

```csharp
public double WaitMinutes { get; set; }
```

- *Type:* double

Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_job_template#wait_minutes MediaconvertJobTemplate#wait_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconvertJobTemplateAccelerationSettingsOutputReference <a name="MediaconvertJobTemplateAccelerationSettingsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplateAccelerationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconvertJobTemplateAccelerationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateAccelerationSettings">MediaconvertJobTemplateAccelerationSettings</a>

---


### MediaconvertJobTemplateHopDestinationsList <a name="MediaconvertJobTemplateHopDestinationsList" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplateHopDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get"></a>

```csharp
private MediaconvertJobTemplateHopDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconvertJobTemplateHopDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>[]

---


### MediaconvertJobTemplateHopDestinationsOutputReference <a name="MediaconvertJobTemplateHopDestinationsOutputReference" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertJobTemplateHopDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue">ResetQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes">ResetWaitMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetQueue` <a name="ResetQueue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetQueue"></a>

```csharp
private void ResetQueue()
```

##### `ResetWaitMinutes` <a name="ResetWaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.resetWaitMinutes"></a>

```csharp
private void ResetWaitMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput">QueueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput">WaitMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue">Queue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes">WaitMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `QueueInput`<sup>Optional</sup> <a name="QueueInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queueInput"></a>

```csharp
public string QueueInput { get; }
```

- *Type:* string

---

##### `WaitMinutesInput`<sup>Optional</sup> <a name="WaitMinutesInput" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutesInput"></a>

```csharp
public double WaitMinutesInput { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Queue`<sup>Required</sup> <a name="Queue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.queue"></a>

```csharp
public string Queue { get; }
```

- *Type:* string

---

##### `WaitMinutes`<sup>Required</sup> <a name="WaitMinutes" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.waitMinutes"></a>

```csharp
public double WaitMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconvertJobTemplateHopDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconvertJobTemplate.MediaconvertJobTemplateHopDestinations">MediaconvertJobTemplateHopDestinations</a>

---



