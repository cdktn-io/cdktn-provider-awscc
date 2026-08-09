# `medialiveNode` Submodule <a name="`medialiveNode` Submodule" id="@cdktn/provider-awscc.medialiveNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveNode <a name="MedialiveNode" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node awscc_medialive_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNode(Construct Scope, string Id, MedialiveNodeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig">MedialiveNodeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig">MedialiveNodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.putNodeInterfaceMappings">PutNodeInterfaceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.putSdiSourceMappings">PutSdiSourceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetNodeInterfaceMappings">ResetNodeInterfaceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetSdiSourceMappings">ResetSdiSourceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNodeInterfaceMappings` <a name="PutNodeInterfaceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.putNodeInterfaceMappings"></a>

```csharp
private void PutNodeInterfaceMappings(IResolvable|MedialiveNodeNodeInterfaceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.putNodeInterfaceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]

---

##### `PutSdiSourceMappings` <a name="PutSdiSourceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.putSdiSourceMappings"></a>

```csharp
private void PutSdiSourceMappings(IResolvable|MedialiveNodeSdiSourceMappings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.putSdiSourceMappings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.putTags"></a>

```csharp
private void PutTags(IResolvable|MedialiveNodeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNodeInterfaceMappings` <a name="ResetNodeInterfaceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetNodeInterfaceMappings"></a>

```csharp
private void ResetNodeInterfaceMappings()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetSdiSourceMappings` <a name="ResetSdiSourceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetSdiSourceMappings"></a>

```csharp
private void ResetSdiSourceMappings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveNode resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveNode.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveNode.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveNode.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveNode.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MedialiveNode resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveNode to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.channelPlacementGroups">ChannelPlacementGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nodeInterfaceMappings">NodeInterfaceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList">MedialiveNodeNodeInterfaceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.sdiSourceMappings">SdiSourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList">MedialiveNodeSdiSourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList">MedialiveNodeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nodeInterfaceMappingsInput">NodeInterfaceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.sdiSourceMappingsInput">SdiSourceMappingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChannelPlacementGroups`<sup>Required</sup> <a name="ChannelPlacementGroups" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.channelPlacementGroups"></a>

```csharp
public string[] ChannelPlacementGroups { get; }
```

- *Type:* string[]

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `NodeInterfaceMappings`<sup>Required</sup> <a name="NodeInterfaceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nodeInterfaceMappings"></a>

```csharp
public MedialiveNodeNodeInterfaceMappingsList NodeInterfaceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList">MedialiveNodeNodeInterfaceMappingsList</a>

---

##### `SdiSourceMappings`<sup>Required</sup> <a name="SdiSourceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.sdiSourceMappings"></a>

```csharp
public MedialiveNodeSdiSourceMappingsList SdiSourceMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList">MedialiveNodeSdiSourceMappingsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.tags"></a>

```csharp
public MedialiveNodeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList">MedialiveNodeTagsList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeInterfaceMappingsInput`<sup>Optional</sup> <a name="NodeInterfaceMappingsInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.nodeInterfaceMappingsInput"></a>

```csharp
public IResolvable|MedialiveNodeNodeInterfaceMappings[] NodeInterfaceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SdiSourceMappingsInput`<sup>Optional</sup> <a name="SdiSourceMappingsInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.sdiSourceMappingsInput"></a>

```csharp
public IResolvable|MedialiveNodeSdiSourceMappings[] SdiSourceMappingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.tagsInput"></a>

```csharp
public IResolvable|MedialiveNodeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveNode.MedialiveNode.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveNodeConfig <a name="MedialiveNodeConfig" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    string Name = null,
    IResolvable|MedialiveNodeNodeInterfaceMappings[] NodeInterfaceMappings = null,
    string Role = null,
    IResolvable|MedialiveNodeSdiSourceMappings[] SdiSourceMappings = null,
    IResolvable|MedialiveNodeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the Cluster that the Node belongs to. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.name">Name</a></code> | <code>string</code> | The user-specified name of the Node. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.nodeInterfaceMappings">NodeInterfaceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]</code> | An array of interface mappings for the Node. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.role">Role</a></code> | <code>string</code> | The role of the Node in the Cluster. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.sdiSourceMappings">SdiSourceMappings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]</code> | An array of SDI source mappings. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]</code> | A collection of key-value pairs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the Cluster that the Node belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#cluster_id MedialiveNode#cluster_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The user-specified name of the Node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#name MedialiveNode#name}

---

##### `NodeInterfaceMappings`<sup>Optional</sup> <a name="NodeInterfaceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.nodeInterfaceMappings"></a>

```csharp
public IResolvable|MedialiveNodeNodeInterfaceMappings[] NodeInterfaceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]

An array of interface mappings for the Node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#node_interface_mappings MedialiveNode#node_interface_mappings}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The role of the Node in the Cluster.

ACTIVE means the Node is available for encoding. BACKUP means the Node is a redundant Node and might get used if an ACTIVE Node fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#role MedialiveNode#role}

---

##### `SdiSourceMappings`<sup>Optional</sup> <a name="SdiSourceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.sdiSourceMappings"></a>

```csharp
public IResolvable|MedialiveNodeSdiSourceMappings[] SdiSourceMappings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]

An array of SDI source mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#sdi_source_mappings MedialiveNode#sdi_source_mappings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeConfig.property.tags"></a>

```csharp
public IResolvable|MedialiveNodeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#tags MedialiveNode#tags}

---

### MedialiveNodeNodeInterfaceMappings <a name="MedialiveNodeNodeInterfaceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeNodeInterfaceMappings {
    string LogicalInterfaceName = null,
    string NetworkInterfaceMode = null,
    string PhysicalInterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.property.logicalInterfaceName">LogicalInterfaceName</a></code> | <code>string</code> | The logical name for this interface. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.property.networkInterfaceMode">NetworkInterfaceMode</a></code> | <code>string</code> | The network interface mode. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.property.physicalInterfaceName">PhysicalInterfaceName</a></code> | <code>string</code> | The physical interface name. |

---

##### `LogicalInterfaceName`<sup>Optional</sup> <a name="LogicalInterfaceName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.property.logicalInterfaceName"></a>

```csharp
public string LogicalInterfaceName { get; set; }
```

- *Type:* string

The logical name for this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#logical_interface_name MedialiveNode#logical_interface_name}

---

##### `NetworkInterfaceMode`<sup>Optional</sup> <a name="NetworkInterfaceMode" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.property.networkInterfaceMode"></a>

```csharp
public string NetworkInterfaceMode { get; set; }
```

- *Type:* string

The network interface mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#network_interface_mode MedialiveNode#network_interface_mode}

---

##### `PhysicalInterfaceName`<sup>Optional</sup> <a name="PhysicalInterfaceName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings.property.physicalInterfaceName"></a>

```csharp
public string PhysicalInterfaceName { get; set; }
```

- *Type:* string

The physical interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#physical_interface_name MedialiveNode#physical_interface_name}

---

### MedialiveNodeSdiSourceMappings <a name="MedialiveNodeSdiSourceMappings" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeSdiSourceMappings {
    double CardNumber = null,
    double ChannelNumber = null,
    string SdiSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.property.cardNumber">CardNumber</a></code> | <code>double</code> | The card number. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.property.channelNumber">ChannelNumber</a></code> | <code>double</code> | The channel number. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.property.sdiSource">SdiSource</a></code> | <code>string</code> | The SDI source. |

---

##### `CardNumber`<sup>Optional</sup> <a name="CardNumber" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.property.cardNumber"></a>

```csharp
public double CardNumber { get; set; }
```

- *Type:* double

The card number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#card_number MedialiveNode#card_number}

---

##### `ChannelNumber`<sup>Optional</sup> <a name="ChannelNumber" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.property.channelNumber"></a>

```csharp
public double ChannelNumber { get; set; }
```

- *Type:* double

The channel number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#channel_number MedialiveNode#channel_number}

---

##### `SdiSource`<sup>Optional</sup> <a name="SdiSource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings.property.sdiSource"></a>

```csharp
public string SdiSource { get; set; }
```

- *Type:* string

The SDI source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#sdi_source MedialiveNode#sdi_source}

---

### MedialiveNodeTags <a name="MedialiveNodeTags" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#key MedialiveNode#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_node#value MedialiveNode#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveNodeNodeInterfaceMappingsList <a name="MedialiveNodeNodeInterfaceMappingsList" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeNodeInterfaceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.get"></a>

```csharp
private MedialiveNodeNodeInterfaceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveNodeNodeInterfaceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>[]

---


### MedialiveNodeNodeInterfaceMappingsOutputReference <a name="MedialiveNodeNodeInterfaceMappingsOutputReference" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeNodeInterfaceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resetLogicalInterfaceName">ResetLogicalInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resetNetworkInterfaceMode">ResetNetworkInterfaceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resetPhysicalInterfaceName">ResetPhysicalInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogicalInterfaceName` <a name="ResetLogicalInterfaceName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resetLogicalInterfaceName"></a>

```csharp
private void ResetLogicalInterfaceName()
```

##### `ResetNetworkInterfaceMode` <a name="ResetNetworkInterfaceMode" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resetNetworkInterfaceMode"></a>

```csharp
private void ResetNetworkInterfaceMode()
```

##### `ResetPhysicalInterfaceName` <a name="ResetPhysicalInterfaceName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.resetPhysicalInterfaceName"></a>

```csharp
private void ResetPhysicalInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.logicalInterfaceNameInput">LogicalInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.networkInterfaceModeInput">NetworkInterfaceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.physicalInterfaceNameInput">PhysicalInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.logicalInterfaceName">LogicalInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.networkInterfaceMode">NetworkInterfaceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.physicalInterfaceName">PhysicalInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogicalInterfaceNameInput`<sup>Optional</sup> <a name="LogicalInterfaceNameInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.logicalInterfaceNameInput"></a>

```csharp
public string LogicalInterfaceNameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceModeInput`<sup>Optional</sup> <a name="NetworkInterfaceModeInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.networkInterfaceModeInput"></a>

```csharp
public string NetworkInterfaceModeInput { get; }
```

- *Type:* string

---

##### `PhysicalInterfaceNameInput`<sup>Optional</sup> <a name="PhysicalInterfaceNameInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.physicalInterfaceNameInput"></a>

```csharp
public string PhysicalInterfaceNameInput { get; }
```

- *Type:* string

---

##### `LogicalInterfaceName`<sup>Required</sup> <a name="LogicalInterfaceName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.logicalInterfaceName"></a>

```csharp
public string LogicalInterfaceName { get; }
```

- *Type:* string

---

##### `NetworkInterfaceMode`<sup>Required</sup> <a name="NetworkInterfaceMode" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.networkInterfaceMode"></a>

```csharp
public string NetworkInterfaceMode { get; }
```

- *Type:* string

---

##### `PhysicalInterfaceName`<sup>Required</sup> <a name="PhysicalInterfaceName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.physicalInterfaceName"></a>

```csharp
public string PhysicalInterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveNodeNodeInterfaceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeNodeInterfaceMappings">MedialiveNodeNodeInterfaceMappings</a>

---


### MedialiveNodeSdiSourceMappingsList <a name="MedialiveNodeSdiSourceMappingsList" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeSdiSourceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.get"></a>

```csharp
private MedialiveNodeSdiSourceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveNodeSdiSourceMappings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>[]

---


### MedialiveNodeSdiSourceMappingsOutputReference <a name="MedialiveNodeSdiSourceMappingsOutputReference" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeSdiSourceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resetCardNumber">ResetCardNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resetChannelNumber">ResetChannelNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resetSdiSource">ResetSdiSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCardNumber` <a name="ResetCardNumber" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resetCardNumber"></a>

```csharp
private void ResetCardNumber()
```

##### `ResetChannelNumber` <a name="ResetChannelNumber" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resetChannelNumber"></a>

```csharp
private void ResetChannelNumber()
```

##### `ResetSdiSource` <a name="ResetSdiSource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.resetSdiSource"></a>

```csharp
private void ResetSdiSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.cardNumberInput">CardNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.channelNumberInput">ChannelNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.sdiSourceInput">SdiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.cardNumber">CardNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.channelNumber">ChannelNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.sdiSource">SdiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CardNumberInput`<sup>Optional</sup> <a name="CardNumberInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.cardNumberInput"></a>

```csharp
public double CardNumberInput { get; }
```

- *Type:* double

---

##### `ChannelNumberInput`<sup>Optional</sup> <a name="ChannelNumberInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.channelNumberInput"></a>

```csharp
public double ChannelNumberInput { get; }
```

- *Type:* double

---

##### `SdiSourceInput`<sup>Optional</sup> <a name="SdiSourceInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.sdiSourceInput"></a>

```csharp
public string SdiSourceInput { get; }
```

- *Type:* string

---

##### `CardNumber`<sup>Required</sup> <a name="CardNumber" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.cardNumber"></a>

```csharp
public double CardNumber { get; }
```

- *Type:* double

---

##### `ChannelNumber`<sup>Required</sup> <a name="ChannelNumber" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.channelNumber"></a>

```csharp
public double ChannelNumber { get; }
```

- *Type:* double

---

##### `SdiSource`<sup>Required</sup> <a name="SdiSource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.sdiSource"></a>

```csharp
public string SdiSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveNodeSdiSourceMappings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeSdiSourceMappings">MedialiveNodeSdiSourceMappings</a>

---


### MedialiveNodeTagsList <a name="MedialiveNodeTagsList" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.get"></a>

```csharp
private MedialiveNodeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveNodeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>[]

---


### MedialiveNodeTagsOutputReference <a name="MedialiveNodeTagsOutputReference" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveNodeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveNode.MedialiveNodeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveNodeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveNode.MedialiveNodeTags">MedialiveNodeTags</a>

---



