# `pcsQueue` Submodule <a name="`pcsQueue` Submodule" id="@cdktn/provider-awscc.pcsQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcsQueue <a name="PcsQueue" id="@cdktn/provider-awscc.pcsQueue.PcsQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue awscc_pcs_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueue(Construct Scope, string Id, PcsQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig">PcsQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig">PcsQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.putComputeNodeGroupConfigurations">PutComputeNodeGroupConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.putSlurmConfiguration">PutSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.resetComputeNodeGroupConfigurations">ResetComputeNodeGroupConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.resetSlurmConfiguration">ResetSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeNodeGroupConfigurations` <a name="PutComputeNodeGroupConfigurations" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.putComputeNodeGroupConfigurations"></a>

```csharp
private void PutComputeNodeGroupConfigurations(IResolvable|PcsQueueComputeNodeGroupConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.putComputeNodeGroupConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]

---

##### `PutSlurmConfiguration` <a name="PutSlurmConfiguration" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.putSlurmConfiguration"></a>

```csharp
private void PutSlurmConfiguration(PcsQueueSlurmConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.putSlurmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a>

---

##### `ResetComputeNodeGroupConfigurations` <a name="ResetComputeNodeGroupConfigurations" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.resetComputeNodeGroupConfigurations"></a>

```csharp
private void ResetComputeNodeGroupConfigurations()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSlurmConfiguration` <a name="ResetSlurmConfiguration" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.resetSlurmConfiguration"></a>

```csharp
private void ResetSlurmConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcsQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PcsQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PcsQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PcsQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PcsQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PcsQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.computeNodeGroupConfigurations">ComputeNodeGroupConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList">PcsQueueComputeNodeGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList">PcsQueueErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference">PcsQueueSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.computeNodeGroupConfigurationsInput">ComputeNodeGroupConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.slurmConfigurationInput">SlurmConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputeNodeGroupConfigurations`<sup>Required</sup> <a name="ComputeNodeGroupConfigurations" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.computeNodeGroupConfigurations"></a>

```csharp
public PcsQueueComputeNodeGroupConfigurationsList ComputeNodeGroupConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList">PcsQueueComputeNodeGroupConfigurationsList</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.errorInfo"></a>

```csharp
public PcsQueueErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList">PcsQueueErrorInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

##### `SlurmConfiguration`<sup>Required</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.slurmConfiguration"></a>

```csharp
public PcsQueueSlurmConfigurationOutputReference SlurmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference">PcsQueueSlurmConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ComputeNodeGroupConfigurationsInput`<sup>Optional</sup> <a name="ComputeNodeGroupConfigurationsInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.computeNodeGroupConfigurationsInput"></a>

```csharp
public IResolvable|PcsQueueComputeNodeGroupConfigurations[] ComputeNodeGroupConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SlurmConfigurationInput`<sup>Optional</sup> <a name="SlurmConfigurationInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.slurmConfigurationInput"></a>

```csharp
public IResolvable|PcsQueueSlurmConfiguration SlurmConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcsQueue.PcsQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PcsQueueComputeNodeGroupConfigurations <a name="PcsQueueComputeNodeGroupConfigurations" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueComputeNodeGroupConfigurations {
    string ComputeNodeGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations.property.computeNodeGroupId">ComputeNodeGroupId</a></code> | <code>string</code> | The compute node group ID for the compute node group configuration. |

---

##### `ComputeNodeGroupId`<sup>Optional</sup> <a name="ComputeNodeGroupId" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations.property.computeNodeGroupId"></a>

```csharp
public string ComputeNodeGroupId { get; set; }
```

- *Type:* string

The compute node group ID for the compute node group configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#compute_node_group_id PcsQueue#compute_node_group_id}

---

### PcsQueueConfig <a name="PcsQueueConfig" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    IResolvable|PcsQueueComputeNodeGroupConfigurations[] ComputeNodeGroupConfigurations = null,
    string Name = null,
    PcsQueueSlurmConfiguration SlurmConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the cluster of the queue. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.computeNodeGroupConfigurations">ComputeNodeGroupConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]</code> | The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.name">Name</a></code> | <code>string</code> | The name that identifies the queue. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a></code> | The Slurm configuration for the queue. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | 1 or more tags added to the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the cluster of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#cluster_id PcsQueue#cluster_id}

---

##### `ComputeNodeGroupConfigurations`<sup>Optional</sup> <a name="ComputeNodeGroupConfigurations" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.computeNodeGroupConfigurations"></a>

```csharp
public IResolvable|PcsQueueComputeNodeGroupConfigurations[] ComputeNodeGroupConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]

The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#compute_node_group_configurations PcsQueue#compute_node_group_configurations}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name that identifies the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#name PcsQueue#name}

---

##### `SlurmConfiguration`<sup>Optional</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.slurmConfiguration"></a>

```csharp
public PcsQueueSlurmConfiguration SlurmConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a>

The Slurm configuration for the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#slurm_configuration PcsQueue#slurm_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.pcsQueue.PcsQueueConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#tags PcsQueue#tags}

---

### PcsQueueErrorInfo <a name="PcsQueueErrorInfo" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueErrorInfo {

};
```


### PcsQueueSlurmConfiguration <a name="PcsQueueSlurmConfiguration" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueSlurmConfiguration {
    IResolvable|PcsQueueSlurmConfigurationSlurmCustomSettings[] SlurmCustomSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]</code> | Custom Slurm parameters that directly map to Slurm configuration settings. |

---

##### `SlurmCustomSettings`<sup>Optional</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration.property.slurmCustomSettings"></a>

```csharp
public IResolvable|PcsQueueSlurmConfigurationSlurmCustomSettings[] SlurmCustomSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]

Custom Slurm parameters that directly map to Slurm configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#slurm_custom_settings PcsQueue#slurm_custom_settings}

---

### PcsQueueSlurmConfigurationSlurmCustomSettings <a name="PcsQueueSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueSlurmConfigurationSlurmCustomSettings {
    string ParameterName = null,
    string ParameterValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings.property.parameterName">ParameterName</a></code> | <code>string</code> | AWS PCS supports configuration of the Slurm parameters for queues:. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings.property.parameterValue">ParameterValue</a></code> | <code>string</code> | The value for the configured Slurm setting. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings.property.parameterName"></a>

```csharp
public string ParameterName { get; set; }
```

- *Type:* string

AWS PCS supports configuration of the Slurm parameters for queues:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#parameter_name PcsQueue#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings.property.parameterValue"></a>

```csharp
public string ParameterValue { get; set; }
```

- *Type:* string

The value for the configured Slurm setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_queue#parameter_value PcsQueue#parameter_value}

---

## Classes <a name="Classes" id="Classes"></a>

### PcsQueueComputeNodeGroupConfigurationsList <a name="PcsQueueComputeNodeGroupConfigurationsList" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueComputeNodeGroupConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.get"></a>

```csharp
private PcsQueueComputeNodeGroupConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|PcsQueueComputeNodeGroupConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>[]

---


### PcsQueueComputeNodeGroupConfigurationsOutputReference <a name="PcsQueueComputeNodeGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueComputeNodeGroupConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.resetComputeNodeGroupId">ResetComputeNodeGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeNodeGroupId` <a name="ResetComputeNodeGroupId" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.resetComputeNodeGroupId"></a>

```csharp
private void ResetComputeNodeGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.computeNodeGroupIdInput">ComputeNodeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.computeNodeGroupId">ComputeNodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeNodeGroupIdInput`<sup>Optional</sup> <a name="ComputeNodeGroupIdInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.computeNodeGroupIdInput"></a>

```csharp
public string ComputeNodeGroupIdInput { get; }
```

- *Type:* string

---

##### `ComputeNodeGroupId`<sup>Required</sup> <a name="ComputeNodeGroupId" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.computeNodeGroupId"></a>

```csharp
public string ComputeNodeGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsQueueComputeNodeGroupConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueComputeNodeGroupConfigurations">PcsQueueComputeNodeGroupConfigurations</a>

---


### PcsQueueErrorInfoList <a name="PcsQueueErrorInfoList" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.get"></a>

```csharp
private PcsQueueErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PcsQueueErrorInfoOutputReference <a name="PcsQueueErrorInfoOutputReference" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfo">PcsQueueErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfoOutputReference.property.internalValue"></a>

```csharp
public PcsQueueErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueErrorInfo">PcsQueueErrorInfo</a>

---


### PcsQueueSlurmConfigurationOutputReference <a name="PcsQueueSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueSlurmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.putSlurmCustomSettings">PutSlurmCustomSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.resetSlurmCustomSettings">ResetSlurmCustomSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlurmCustomSettings` <a name="PutSlurmCustomSettings" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.putSlurmCustomSettings"></a>

```csharp
private void PutSlurmCustomSettings(IResolvable|PcsQueueSlurmConfigurationSlurmCustomSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.putSlurmCustomSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `ResetSlurmCustomSettings` <a name="ResetSlurmCustomSettings" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.resetSlurmCustomSettings"></a>

```csharp
private void ResetSlurmCustomSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList">PcsQueueSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.slurmCustomSettingsInput">SlurmCustomSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SlurmCustomSettings`<sup>Required</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```csharp
public PcsQueueSlurmConfigurationSlurmCustomSettingsList SlurmCustomSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList">PcsQueueSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `SlurmCustomSettingsInput`<sup>Optional</sup> <a name="SlurmCustomSettingsInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.slurmCustomSettingsInput"></a>

```csharp
public IResolvable|PcsQueueSlurmConfigurationSlurmCustomSettings[] SlurmCustomSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsQueueSlurmConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfiguration">PcsQueueSlurmConfiguration</a>

---


### PcsQueueSlurmConfigurationSlurmCustomSettingsList <a name="PcsQueueSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueSlurmConfigurationSlurmCustomSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.get"></a>

```csharp
private PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsList.property.internalValue"></a>

```csharp
public IResolvable|PcsQueueSlurmConfigurationSlurmCustomSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>[]

---


### PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference <a name="PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName"></a>

```csharp
private void ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue"></a>

```csharp
private void ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput"></a>

```csharp
public string ParameterNameInput { get; }
```

- *Type:* string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput"></a>

```csharp
public string ParameterValueInput { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PcsQueueSlurmConfigurationSlurmCustomSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.pcsQueue.PcsQueueSlurmConfigurationSlurmCustomSettings">PcsQueueSlurmConfigurationSlurmCustomSettings</a>

---



