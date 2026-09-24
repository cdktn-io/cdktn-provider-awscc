# `mediaconvertQueue` Submodule <a name="`mediaconvertQueue` Submodule" id="@cdktn/provider-awscc.mediaconvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertQueue <a name="MediaconvertQueue" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertQueue(Construct Scope, string Id, MediaconvertQueueConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig">MediaconvertQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig">MediaconvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs">ResetConcurrentJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds">ResetMaximumConcurrentFeeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConcurrentJobs` <a name="ResetConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs"></a>

```csharp
private void ResetConcurrentJobs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMaximumConcurrentFeeds` <a name="ResetMaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds"></a>

```csharp
private void ResetMaximumConcurrentFeeds()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan"></a>

```csharp
private void ResetPricingPlan()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconvertQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconvertQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput">ConcurrentJobsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput">MaximumConcurrentFeedsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput">PricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput">TagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs">ConcurrentJobs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds">MaximumConcurrentFeeds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags">Tags</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConcurrentJobsInput`<sup>Optional</sup> <a name="ConcurrentJobsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput"></a>

```csharp
public double ConcurrentJobsInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MaximumConcurrentFeedsInput`<sup>Optional</sup> <a name="MaximumConcurrentFeedsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput"></a>

```csharp
public double MaximumConcurrentFeedsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput"></a>

```csharp
public string PricingPlanInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput"></a>

```csharp
public string TagsInput { get; }
```

- *Type:* string

---

##### `ConcurrentJobs`<sup>Required</sup> <a name="ConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs"></a>

```csharp
public double ConcurrentJobs { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MaximumConcurrentFeeds`<sup>Required</sup> <a name="MaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds"></a>

```csharp
public double MaximumConcurrentFeeds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertQueueConfig <a name="MediaconvertQueueConfig" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconvertQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double ConcurrentJobs = null,
    string Description = null,
    double MaximumConcurrentFeeds = null,
    string Name = null,
    string PricingPlan = null,
    string Status = null,
    string Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs">ConcurrentJobs</a></code> | <code>double</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description">Description</a></code> | <code>string</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds">MaximumConcurrentFeeds</a></code> | <code>double</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name">Name</a></code> | <code>string</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status">Status</a></code> | <code>string</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags">Tags</a></code> | <code>string</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConcurrentJobs`<sup>Optional</sup> <a name="ConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs"></a>

```csharp
public double ConcurrentJobs { get; set; }
```

- *Type:* double

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `MaximumConcurrentFeeds`<sup>Optional</sup> <a name="MaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds"></a>

```csharp
public double MaximumConcurrentFeeds { get; set; }
```

- *Type:* double

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; set; }
```

- *Type:* string

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags"></a>

```csharp
public string Tags { get; set; }
```

- *Type:* string

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---



