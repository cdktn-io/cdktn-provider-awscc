# `frauddetectorVariable` Submodule <a name="`frauddetectorVariable` Submodule" id="@cdktn/provider-awscc.frauddetectorVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorVariable <a name="FrauddetectorVariable" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable awscc_frauddetector_variable}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorVariable(Construct Scope, string Id, FrauddetectorVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig">FrauddetectorVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig">FrauddetectorVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetVariableType">ResetVariableType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.putTags"></a>

```csharp
private void PutTags(IResolvable|FrauddetectorVariableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVariableType` <a name="ResetVariableType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.resetVariableType"></a>

```csharp
private void ResetVariableType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FrauddetectorVariable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FrauddetectorVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FrauddetectorVariable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FrauddetectorVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FrauddetectorVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList">FrauddetectorVariableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableTypeInput">VariableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tags"></a>

```csharp
public FrauddetectorVariableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList">FrauddetectorVariableTagsList</a>

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tagsInput"></a>

```csharp
public IResolvable|FrauddetectorVariableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableTypeInput"></a>

```csharp
public string VariableTypeInput { get; }
```

- *Type:* string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorVariableConfig <a name="FrauddetectorVariableConfig" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorVariableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataSource,
    string DataType,
    string DefaultValue,
    string Name,
    string Description = null,
    IResolvable|FrauddetectorVariableTags[] Tags = null,
    string VariableType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataSource">DataSource</a></code> | <code>string</code> | The source of the data. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataType">DataType</a></code> | <code>string</code> | The data type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.defaultValue">DefaultValue</a></code> | <code>string</code> | The default value for the variable when no value is received. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.name">Name</a></code> | <code>string</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.description">Description</a></code> | <code>string</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]</code> | Tags associated with this variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.variableType">VariableType</a></code> | <code>string</code> | The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

The source of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#data_source FrauddetectorVariable#data_source}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

The data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#data_type FrauddetectorVariable#data_type}

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

The default value for the variable when no value is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#default_value FrauddetectorVariable#default_value}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#name FrauddetectorVariable#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#description FrauddetectorVariable#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.tags"></a>

```csharp
public IResolvable|FrauddetectorVariableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]

Tags associated with this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#tags FrauddetectorVariable#tags}

---

##### `VariableType`<sup>Optional</sup> <a name="VariableType" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableConfig.property.variableType"></a>

```csharp
public string VariableType { get; set; }
```

- *Type:* string

The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#variable_type FrauddetectorVariable#variable_type}

---

### FrauddetectorVariableTags <a name="FrauddetectorVariableTags" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorVariableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#key FrauddetectorVariable#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#value FrauddetectorVariable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#key FrauddetectorVariable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/frauddetector_variable#value FrauddetectorVariable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorVariableTagsList <a name="FrauddetectorVariableTagsList" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorVariableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.get"></a>

```csharp
private FrauddetectorVariableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsList.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorVariableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>[]

---


### FrauddetectorVariableTagsOutputReference <a name="FrauddetectorVariableTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FrauddetectorVariableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FrauddetectorVariableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.frauddetectorVariable.FrauddetectorVariableTags">FrauddetectorVariableTags</a>

---



