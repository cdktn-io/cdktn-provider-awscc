# `chimeChannelFlow` Submodule <a name="`chimeChannelFlow` Submodule" id="@cdktn/provider-awscc.chimeChannelFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannelFlow <a name="ChimeChannelFlow" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow awscc_chime_channel_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlow(Construct Scope, string Id, ChimeChannelFlowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig">ChimeChannelFlowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig">ChimeChannelFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors">PutProcessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProcessors` <a name="PutProcessors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors"></a>

```csharp
private void PutProcessors(IResolvable|ChimeChannelFlowProcessors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags"></a>

```csharp
private void PutTags(IResolvable|ChimeChannelFlowTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannelFlow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannelFlow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannelFlow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ChimeChannelFlow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeChannelFlow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeChannelFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannelFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceId">AppInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.channelFlowId">ChannelFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processors">Processors</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList">ChimeChannelFlowProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList">ChimeChannelFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArnInput">AppInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processorsInput">ProcessorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppInstanceId`<sup>Required</sup> <a name="AppInstanceId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceId"></a>

```csharp
public string AppInstanceId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChannelFlowId`<sup>Required</sup> <a name="ChannelFlowId" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.channelFlowId"></a>

```csharp
public string ChannelFlowId { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `Processors`<sup>Required</sup> <a name="Processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processors"></a>

```csharp
public ChimeChannelFlowProcessorsList Processors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList">ChimeChannelFlowProcessorsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tags"></a>

```csharp
public ChimeChannelFlowTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList">ChimeChannelFlowTagsList</a>

---

##### `AppInstanceArnInput`<sup>Optional</sup> <a name="AppInstanceArnInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArnInput"></a>

```csharp
public string AppInstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProcessorsInput`<sup>Optional</sup> <a name="ProcessorsInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processorsInput"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessors[] ProcessorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tagsInput"></a>

```csharp
public IResolvable|ChimeChannelFlowTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelFlowConfig <a name="ChimeChannelFlowConfig" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppInstanceArn,
    string Name,
    IResolvable|ChimeChannelFlowProcessors[] Processors,
    IResolvable|ChimeChannelFlowTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | The ARN of the app instance. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.name">Name</a></code> | <code>string</code> | The name of the channel flow. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.processors">Processors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]</code> | Information about the processor Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]</code> | The tags for the channel flow. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; set; }
```

- *Type:* string

The ARN of the app instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#app_instance_arn ChimeChannelFlow#app_instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

##### `Processors`<sup>Required</sup> <a name="Processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.processors"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessors[] Processors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

Information about the processor Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#processors ChimeChannelFlow#processors}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.tags"></a>

```csharp
public IResolvable|ChimeChannelFlowTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

The tags for the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#tags ChimeChannelFlow#tags}

---

### ChimeChannelFlowProcessors <a name="ChimeChannelFlowProcessors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessors {
    ChimeChannelFlowProcessorsConfiguration Configuration,
    double ExecutionOrder,
    string FallbackAction,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | A processor's metadata. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.executionOrder">ExecutionOrder</a></code> | <code>double</code> | The sequence in which processors run. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.fallbackAction">FallbackAction</a></code> | <code>string</code> | Determines whether to continue or stop processing when communication with a processor fails. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.name">Name</a></code> | <code>string</code> | The name of the processor. |

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.configuration"></a>

```csharp
public ChimeChannelFlowProcessorsConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

A processor's metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#configuration ChimeChannelFlow#configuration}

---

##### `ExecutionOrder`<sup>Required</sup> <a name="ExecutionOrder" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.executionOrder"></a>

```csharp
public double ExecutionOrder { get; set; }
```

- *Type:* double

The sequence in which processors run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#execution_order ChimeChannelFlow#execution_order}

---

##### `FallbackAction`<sup>Required</sup> <a name="FallbackAction" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.fallbackAction"></a>

```csharp
public string FallbackAction { get; set; }
```

- *Type:* string

Determines whether to continue or stop processing when communication with a processor fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#fallback_action ChimeChannelFlow#fallback_action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

### ChimeChannelFlowProcessorsConfiguration <a name="ChimeChannelFlowProcessorsConfiguration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessorsConfiguration {
    ChimeChannelFlowProcessorsConfigurationLambda Lambda
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | Stores metadata about a Lambda processor. |

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.property.lambda"></a>

```csharp
public ChimeChannelFlowProcessorsConfigurationLambda Lambda { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

Stores metadata about a Lambda processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#lambda ChimeChannelFlow#lambda}

---

### ChimeChannelFlowProcessorsConfigurationLambda <a name="ChimeChannelFlowProcessorsConfigurationLambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessorsConfigurationLambda {
    string InvocationType,
    string ResourceArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.invocationType">InvocationType</a></code> | <code>string</code> | Controls how the Lambda function is invoked. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The ARN of the Lambda message processing function. |

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.invocationType"></a>

```csharp
public string InvocationType { get; set; }
```

- *Type:* string

Controls how the Lambda function is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#invocation_type ChimeChannelFlow#invocation_type}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The ARN of the Lambda message processing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#resource_arn ChimeChannelFlow#resource_arn}

---

### ChimeChannelFlowTags <a name="ChimeChannelFlowTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.key">Key</a></code> | <code>string</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.value">Value</a></code> | <code>string</code> | The value in a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#key ChimeChannelFlow#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#value ChimeChannelFlow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelFlowProcessorsConfigurationLambdaOutputReference <a name="ChimeChannelFlowProcessorsConfigurationLambdaOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessorsConfigurationLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationType">InvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationTypeInput"></a>

```csharp
public string InvocationTypeInput { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationType"></a>

```csharp
public string InvocationType { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessorsConfigurationLambda InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---


### ChimeChannelFlowProcessorsConfigurationOutputReference <a name="ChimeChannelFlowProcessorsConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessorsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda">PutLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambda` <a name="PutLambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda"></a>

```csharp
private void PutLambda(ChimeChannelFlowProcessorsConfigurationLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference">ChimeChannelFlowProcessorsConfigurationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambda"></a>

```csharp
public ChimeChannelFlowProcessorsConfigurationLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference">ChimeChannelFlowProcessorsConfigurationLambdaOutputReference</a>

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambdaInput"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessorsConfigurationLambda LambdaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessorsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---


### ChimeChannelFlowProcessorsList <a name="ChimeChannelFlowProcessorsList" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get"></a>

```csharp
private ChimeChannelFlowProcessorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>[]

---


### ChimeChannelFlowProcessorsOutputReference <a name="ChimeChannelFlowProcessorsOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowProcessorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration"></a>

```csharp
private void PutConfiguration(ChimeChannelFlowProcessorsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference">ChimeChannelFlowProcessorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrderInput">ExecutionOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackActionInput">FallbackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrder">ExecutionOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackAction">FallbackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configuration"></a>

```csharp
public ChimeChannelFlowProcessorsConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference">ChimeChannelFlowProcessorsConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configurationInput"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessorsConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---

##### `ExecutionOrderInput`<sup>Optional</sup> <a name="ExecutionOrderInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrderInput"></a>

```csharp
public double ExecutionOrderInput { get; }
```

- *Type:* double

---

##### `FallbackActionInput`<sup>Optional</sup> <a name="FallbackActionInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackActionInput"></a>

```csharp
public string FallbackActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ExecutionOrder`<sup>Required</sup> <a name="ExecutionOrder" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrder"></a>

```csharp
public double ExecutionOrder { get; }
```

- *Type:* double

---

##### `FallbackAction`<sup>Required</sup> <a name="FallbackAction" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackAction"></a>

```csharp
public string FallbackAction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelFlowProcessors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>

---


### ChimeChannelFlowTagsList <a name="ChimeChannelFlowTagsList" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get"></a>

```csharp
private ChimeChannelFlowTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelFlowTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>[]

---


### ChimeChannelFlowTagsOutputReference <a name="ChimeChannelFlowTagsOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ChimeChannelFlowTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeChannelFlowTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>

---



