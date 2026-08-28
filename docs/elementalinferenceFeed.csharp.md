# `elementalinferenceFeed` Submodule <a name="`elementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.elementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceFeed <a name="ElementalinferenceFeed" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeed(Construct Scope, string Id, ElementalinferenceFeedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig">ElementalinferenceFeedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig">ElementalinferenceFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetAccessRoleArn">ResetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs"></a>

```csharp
private void PutOutputs(IResolvable|ElementalinferenceFeedOutputs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

---

##### `ResetAccessRoleArn` <a name="ResetAccessRoleArn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetAccessRoleArn"></a>

```csharp
private void ResetAccessRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceFeed.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceFeed.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceFeed.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceFeed.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElementalinferenceFeed to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints">DataEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId">FeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.accessRoleArnInput">AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput">OutputsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.accessRoleArn">AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataEndpoints`<sup>Required</sup> <a name="DataEndpoints" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints"></a>

```csharp
public string[] DataEndpoints { get; }
```

- *Type:* string[]

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId"></a>

```csharp
public string FeedId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs"></a>

```csharp
public ElementalinferenceFeedOutputsList Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a>

---

##### `AccessRoleArnInput`<sup>Optional</sup> <a name="AccessRoleArnInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.accessRoleArnInput"></a>

```csharp
public string AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputs[] OutputsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.accessRoleArn"></a>

```csharp
public string AccessRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceFeedConfig <a name="ElementalinferenceFeedConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|ElementalinferenceFeedOutputs[] Outputs,
    string AccessRoleArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs">Outputs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.accessRoleArn">AccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#access_role_arn ElementalinferenceFeed#access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputs[] Outputs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}.

---

##### `AccessRoleArn`<sup>Optional</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.accessRoleArn"></a>

```csharp
public string AccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#access_role_arn ElementalinferenceFeed#access_role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}.

---

### ElementalinferenceFeedOutputs <a name="ElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputs {
    string Name,
    ElementalinferenceFeedOutputsOutputConfig OutputConfig,
    string Status,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfig OutputConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}.

---

### ElementalinferenceFeedOutputsOutputConfig <a name="ElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfig {
    ElementalinferenceFeedOutputsOutputConfigClipping Clipping = null,
    ElementalinferenceFeedOutputsOutputConfigCropping Cropping = null,
    ElementalinferenceFeedOutputsOutputConfigSubtitling Subtitling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping">Clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping">Cropping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling">Subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}. |

---

##### `Clipping`<sup>Optional</sup> <a name="Clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigClipping Clipping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}.

---

##### `Cropping`<sup>Optional</sup> <a name="Cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigCropping Cropping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}.

---

##### `Subtitling`<sup>Optional</sup> <a name="Subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigSubtitling Subtitling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}.

---

### ElementalinferenceFeedOutputsOutputConfigClipping <a name="ElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigClipping {
    string CallbackMetadata = null,
    ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration DataSourceConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata">CallbackMetadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.dataSourceConfiguration">DataSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#data_source_configuration ElementalinferenceFeed#data_source_configuration}. |

---

##### `CallbackMetadata`<sup>Optional</sup> <a name="CallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata"></a>

```csharp
public string CallbackMetadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}.

---

##### `DataSourceConfiguration`<sup>Optional</sup> <a name="DataSourceConfiguration" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.dataSourceConfiguration"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration DataSourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#data_source_configuration ElementalinferenceFeed#data_source_configuration}.

---

### ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration <a name="ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration {
    string FixtureId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration.property.fixtureId">FixtureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#fixture_id ElementalinferenceFeed#fixture_id}. |

---

##### `FixtureId`<sup>Optional</sup> <a name="FixtureId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration.property.fixtureId"></a>

```csharp
public string FixtureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#fixture_id ElementalinferenceFeed#fixture_id}.

---

### ElementalinferenceFeedOutputsOutputConfigCropping <a name="ElementalinferenceFeedOutputsOutputConfigCropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigCropping {
    IResolvable|ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups[] TemplateGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping.property.templateGroups">TemplateGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#template_groups ElementalinferenceFeed#template_groups}. |

---

##### `TemplateGroups`<sup>Optional</sup> <a name="TemplateGroups" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping.property.templateGroups"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups[] TemplateGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#template_groups ElementalinferenceFeed#template_groups}.

---

### ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups <a name="ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups {
    string Name = null,
    string[] TemplateUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.property.templateUris">TemplateUris</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#template_uris ElementalinferenceFeed#template_uris}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `TemplateUris`<sup>Optional</sup> <a name="TemplateUris" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups.property.templateUris"></a>

```csharp
public string[] TemplateUris { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#template_uris ElementalinferenceFeed#template_uris}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitling <a name="ElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigSubtitling {
    ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio AspectRatio = null,
    string Dictionary = null,
    string Language = null,
    string ProfanityFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio">AspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary">Dictionary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter">ProfanityFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}. |

---

##### `AspectRatio`<sup>Optional</sup> <a name="AspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio AspectRatio { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}.

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary"></a>

```csharp
public string Dictionary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}.

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}.

---

##### `ProfanityFilter`<sup>Optional</sup> <a name="ProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter"></a>

```csharp
public string ProfanityFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio {
    double Height = null,
    double Width = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height">Height</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width">Width</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}. |

---

##### `Height`<sup>Optional</sup> <a name="Height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height"></a>

```csharp
public double Height { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}.

---

##### `Width`<sup>Optional</sup> <a name="Width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width"></a>

```csharp
public double Width { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalinferenceFeedOutputsList <a name="ElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get"></a>

```csharp
private ElementalinferenceFeedOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>[]

---


### ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resetFixtureId">ResetFixtureId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixtureId` <a name="ResetFixtureId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.resetFixtureId"></a>

```csharp
private void ResetFixtureId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureIdInput">FixtureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureId">FixtureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixtureIdInput`<sup>Optional</sup> <a name="FixtureIdInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureIdInput"></a>

```csharp
public string FixtureIdInput { get; }
```

- *Type:* string

---

##### `FixtureId`<sup>Required</sup> <a name="FixtureId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.fixtureId"></a>

```csharp
public string FixtureId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a>

---


### ElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigClippingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.putDataSourceConfiguration">PutDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata">ResetCallbackMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetDataSourceConfiguration">ResetDataSourceConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSourceConfiguration` <a name="PutDataSourceConfiguration" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.putDataSourceConfiguration"></a>

```csharp
private void PutDataSourceConfiguration(ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.putDataSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a>

---

##### `ResetCallbackMetadata` <a name="ResetCallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata"></a>

```csharp
private void ResetCallbackMetadata()
```

##### `ResetDataSourceConfiguration` <a name="ResetDataSourceConfiguration" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetDataSourceConfiguration"></a>

```csharp
private void ResetDataSourceConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfiguration">DataSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput">CallbackMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfigurationInput">DataSourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">CallbackMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSourceConfiguration`<sup>Required</sup> <a name="DataSourceConfiguration" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfiguration"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference DataSourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfigurationOutputReference</a>

---

##### `CallbackMetadataInput`<sup>Optional</sup> <a name="CallbackMetadataInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput"></a>

```csharp
public string CallbackMetadataInput { get; }
```

- *Type:* string

---

##### `DataSourceConfigurationInput`<sup>Optional</sup> <a name="DataSourceConfigurationInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.dataSourceConfigurationInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration DataSourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration">ElementalinferenceFeedOutputsOutputConfigClippingDataSourceConfiguration</a>

---

##### `CallbackMetadata`<sup>Required</sup> <a name="CallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```csharp
public string CallbackMetadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigClipping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---


### ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.putTemplateGroups">PutTemplateGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resetTemplateGroups">ResetTemplateGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTemplateGroups` <a name="PutTemplateGroups" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.putTemplateGroups"></a>

```csharp
private void PutTemplateGroups(IResolvable|ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.putTemplateGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]

---

##### `ResetTemplateGroups` <a name="ResetTemplateGroups" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.resetTemplateGroups"></a>

```csharp
private void ResetTemplateGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroups">TemplateGroups</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroupsInput">TemplateGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateGroups`<sup>Required</sup> <a name="TemplateGroups" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroups"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList TemplateGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList</a>

---

##### `TemplateGroupsInput`<sup>Optional</sup> <a name="TemplateGroupsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.templateGroupsInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups[] TemplateGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigCropping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a>

---


### ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList <a name="ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get"></a>

```csharp
private ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsList.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>[]

---


### ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resetTemplateUris">ResetTemplateUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTemplateUris` <a name="ResetTemplateUris" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.resetTemplateUris"></a>

```csharp
private void ResetTemplateUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUrisInput">TemplateUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUris">TemplateUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TemplateUrisInput`<sup>Optional</sup> <a name="TemplateUrisInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUrisInput"></a>

```csharp
public string[] TemplateUrisInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TemplateUris`<sup>Required</sup> <a name="TemplateUris" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.templateUris"></a>

```csharp
public string[] TemplateUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups">ElementalinferenceFeedOutputsOutputConfigCroppingTemplateGroups</a>

---


### ElementalinferenceFeedOutputsOutputConfigOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping">PutClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putCropping">PutCropping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling">PutSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping">ResetClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping">ResetCropping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling">ResetSubtitling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClipping` <a name="PutClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping"></a>

```csharp
private void PutClipping(ElementalinferenceFeedOutputsOutputConfigClipping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `PutCropping` <a name="PutCropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putCropping"></a>

```csharp
private void PutCropping(ElementalinferenceFeedOutputsOutputConfigCropping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putCropping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a>

---

##### `PutSubtitling` <a name="PutSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling"></a>

```csharp
private void PutSubtitling(ElementalinferenceFeedOutputsOutputConfigSubtitling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `ResetClipping` <a name="ResetClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping"></a>

```csharp
private void ResetClipping()
```

##### `ResetCropping` <a name="ResetCropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping"></a>

```csharp
private void ResetCropping()
```

##### `ResetSubtitling` <a name="ResetSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling"></a>

```csharp
private void ResetSubtitling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">Clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">Cropping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference">ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">Subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput">ClippingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput">CroppingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput">SubtitlingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clipping`<sup>Required</sup> <a name="Clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigClippingOutputReference Clipping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `Cropping`<sup>Required</sup> <a name="Cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference Cropping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference">ElementalinferenceFeedOutputsOutputConfigCroppingOutputReference</a>

---

##### `Subtitling`<sup>Required</sup> <a name="Subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference Subtitling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `ClippingInput`<sup>Optional</sup> <a name="ClippingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigClipping ClippingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `CroppingInput`<sup>Optional</sup> <a name="CroppingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigCropping CroppingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigCropping">ElementalinferenceFeedOutputsOutputConfigCropping</a>

---

##### `SubtitlingInput`<sup>Optional</sup> <a name="SubtitlingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitling SubtitlingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight">ResetHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth">ResetWidth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeight` <a name="ResetHeight" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight"></a>

```csharp
private void ResetHeight()
```

##### `ResetWidth` <a name="ResetWidth" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth"></a>

```csharp
private void ResetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput">HeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput">WidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeightInput`<sup>Optional</sup> <a name="HeightInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput"></a>

```csharp
public double HeightInput { get; }
```

- *Type:* double

---

##### `WidthInput`<sup>Optional</sup> <a name="WidthInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput"></a>

```csharp
public double WidthInput { get; }
```

- *Type:* double

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio">PutAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio">ResetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter">ResetProfanityFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAspectRatio` <a name="PutAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio"></a>

```csharp
private void PutAspectRatio(ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `ResetAspectRatio` <a name="ResetAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio"></a>

```csharp
private void ResetAspectRatio()
```

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary"></a>

```csharp
private void ResetDictionary()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetProfanityFilter` <a name="ResetProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter"></a>

```csharp
private void ResetProfanityFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">AspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput">AspectRatioInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput">ProfanityFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">Dictionary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">ProfanityFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectRatio`<sup>Required</sup> <a name="AspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference AspectRatio { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `AspectRatioInput`<sup>Optional</sup> <a name="AspectRatioInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio AspectRatioInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput"></a>

```csharp
public string DictionaryInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `ProfanityFilterInput`<sup>Optional</sup> <a name="ProfanityFilterInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput"></a>

```csharp
public string ProfanityFilterInput { get; }
```

- *Type:* string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```csharp
public string Dictionary { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `ProfanityFilter`<sup>Required</sup> <a name="ProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```csharp
public string ProfanityFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---


### ElementalinferenceFeedOutputsOutputReference <a name="ElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceFeedOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig"></a>

```csharp
private void PutOutputConfig(ElementalinferenceFeedOutputsOutputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput">OutputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```csharp
public ElementalinferenceFeedOutputsOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputsOutputConfig OutputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElementalinferenceFeedOutputs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>

---



