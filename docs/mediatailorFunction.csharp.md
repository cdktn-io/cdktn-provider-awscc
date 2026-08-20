# `mediatailorFunction` Submodule <a name="`mediatailorFunction` Submodule" id="@cdktn/provider-awscc.mediatailorFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorFunction <a name="MediatailorFunction" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function awscc_mediatailor_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunction(Construct Scope, string Id, MediatailorFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig">MediatailorFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig">MediatailorFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putCustomOutputConfiguration">PutCustomOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putHttpRequestConfiguration">PutHttpRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putSequentialExecutorConfiguration">PutSequentialExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetCustomOutputConfiguration">ResetCustomOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetHttpRequestConfiguration">ResetHttpRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetSequentialExecutorConfiguration">ResetSequentialExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomOutputConfiguration` <a name="PutCustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putCustomOutputConfiguration"></a>

```csharp
private void PutCustomOutputConfiguration(MediatailorFunctionCustomOutputConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putCustomOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

---

##### `PutHttpRequestConfiguration` <a name="PutHttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putHttpRequestConfiguration"></a>

```csharp
private void PutHttpRequestConfiguration(MediatailorFunctionHttpRequestConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putHttpRequestConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

---

##### `PutSequentialExecutorConfiguration` <a name="PutSequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putSequentialExecutorConfiguration"></a>

```csharp
private void PutSequentialExecutorConfiguration(MediatailorFunctionSequentialExecutorConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putSequentialExecutorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putTags"></a>

```csharp
private void PutTags(IResolvable|MediatailorFunctionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]

---

##### `ResetCustomOutputConfiguration` <a name="ResetCustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetCustomOutputConfiguration"></a>

```csharp
private void ResetCustomOutputConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHttpRequestConfiguration` <a name="ResetHttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetHttpRequestConfiguration"></a>

```csharp
private void ResetHttpRequestConfiguration()
```

##### `ResetSequentialExecutorConfiguration` <a name="ResetSequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetSequentialExecutorConfiguration"></a>

```csharp
private void ResetSequentialExecutorConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediatailorFunction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediatailorFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediatailorFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfiguration">CustomOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference">MediatailorFunctionCustomOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfiguration">HttpRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference">MediatailorFunctionHttpRequestConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfiguration">SequentialExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference">MediatailorFunctionSequentialExecutorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList">MediatailorFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfigurationInput">CustomOutputConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionTypeInput">FunctionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfigurationInput">HttpRequestConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfigurationInput">SequentialExecutorConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionType">FunctionType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomOutputConfiguration`<sup>Required</sup> <a name="CustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfiguration"></a>

```csharp
public MediatailorFunctionCustomOutputConfigurationOutputReference CustomOutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference">MediatailorFunctionCustomOutputConfigurationOutputReference</a>

---

##### `HttpRequestConfiguration`<sup>Required</sup> <a name="HttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfiguration"></a>

```csharp
public MediatailorFunctionHttpRequestConfigurationOutputReference HttpRequestConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference">MediatailorFunctionHttpRequestConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SequentialExecutorConfiguration`<sup>Required</sup> <a name="SequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfiguration"></a>

```csharp
public MediatailorFunctionSequentialExecutorConfigurationOutputReference SequentialExecutorConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference">MediatailorFunctionSequentialExecutorConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tags"></a>

```csharp
public MediatailorFunctionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList">MediatailorFunctionTagsList</a>

---

##### `CustomOutputConfigurationInput`<sup>Optional</sup> <a name="CustomOutputConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.customOutputConfigurationInput"></a>

```csharp
public IResolvable|MediatailorFunctionCustomOutputConfiguration CustomOutputConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `FunctionTypeInput`<sup>Optional</sup> <a name="FunctionTypeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionTypeInput"></a>

```csharp
public string FunctionTypeInput { get; }
```

- *Type:* string

---

##### `HttpRequestConfigurationInput`<sup>Optional</sup> <a name="HttpRequestConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.httpRequestConfigurationInput"></a>

```csharp
public IResolvable|MediatailorFunctionHttpRequestConfiguration HttpRequestConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

---

##### `SequentialExecutorConfigurationInput`<sup>Optional</sup> <a name="SequentialExecutorConfigurationInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.sequentialExecutorConfigurationInput"></a>

```csharp
public IResolvable|MediatailorFunctionSequentialExecutorConfiguration SequentialExecutorConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tagsInput"></a>

```csharp
public IResolvable|MediatailorFunctionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.functionType"></a>

```csharp
public string FunctionType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorFunctionConfig <a name="MediatailorFunctionConfig" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FunctionId,
    string FunctionType,
    MediatailorFunctionCustomOutputConfiguration CustomOutputConfiguration = null,
    string Description = null,
    MediatailorFunctionHttpRequestConfiguration HttpRequestConfiguration = null,
    MediatailorFunctionSequentialExecutorConfiguration SequentialExecutorConfiguration = null,
    IResolvable|MediatailorFunctionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionId">FunctionId</a></code> | <code>string</code> | The unique identifier for the function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionType">FunctionType</a></code> | <code>string</code> | The type of the function. Determines which configuration object is used. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.customOutputConfiguration">CustomOutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | Configuration for custom output functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.description">Description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.httpRequestConfiguration">HttpRequestConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | Configuration for HTTP request functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.sequentialExecutorConfiguration">SequentialExecutorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | Configuration for sequential executor functions. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]</code> | The tags to assign to the function resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

The unique identifier for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#function_id MediatailorFunction#function_id}

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.functionType"></a>

```csharp
public string FunctionType { get; set; }
```

- *Type:* string

The type of the function. Determines which configuration object is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#function_type MediatailorFunction#function_type}

---

##### `CustomOutputConfiguration`<sup>Optional</sup> <a name="CustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.customOutputConfiguration"></a>

```csharp
public MediatailorFunctionCustomOutputConfiguration CustomOutputConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

Configuration for custom output functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#custom_output_configuration MediatailorFunction#custom_output_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#description MediatailorFunction#description}

---

##### `HttpRequestConfiguration`<sup>Optional</sup> <a name="HttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.httpRequestConfiguration"></a>

```csharp
public MediatailorFunctionHttpRequestConfiguration HttpRequestConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

Configuration for HTTP request functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#http_request_configuration MediatailorFunction#http_request_configuration}

---

##### `SequentialExecutorConfiguration`<sup>Optional</sup> <a name="SequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.sequentialExecutorConfiguration"></a>

```csharp
public MediatailorFunctionSequentialExecutorConfiguration SequentialExecutorConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

Configuration for sequential executor functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#sequential_executor_configuration MediatailorFunction#sequential_executor_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionConfig.property.tags"></a>

```csharp
public IResolvable|MediatailorFunctionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]

The tags to assign to the function resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#tags MediatailorFunction#tags}

---

### MediatailorFunctionCustomOutputConfiguration <a name="MediatailorFunctionCustomOutputConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionCustomOutputConfiguration {
    System.Collections.Generic.IDictionary<string, string> Output = null,
    string Runtime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.output">Output</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of output key-value pairs that define the custom output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.runtime">Runtime</a></code> | <code>string</code> | The runtime environment for the function expression language. |

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.output"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Output { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of output key-value pairs that define the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The runtime environment for the function expression language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

### MediatailorFunctionHttpRequestConfiguration <a name="MediatailorFunctionHttpRequestConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionHttpRequestConfiguration {
    string Body = null,
    System.Collections.Generic.IDictionary<string, string> Headers = null,
    string MethodType = null,
    System.Collections.Generic.IDictionary<string, string> Output = null,
    double RequestTimeoutMilliseconds = null,
    string Runtime = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.body">Body</a></code> | <code>string</code> | The body of the HTTP request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of HTTP headers to include in the request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.methodType">MethodType</a></code> | <code>string</code> | The HTTP method type for the request. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.output">Output</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of output key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.requestTimeoutMilliseconds">RequestTimeoutMilliseconds</a></code> | <code>double</code> | The timeout in milliseconds for the HTTP request. Maximum value is 2000. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.runtime">Runtime</a></code> | <code>string</code> | The runtime environment for the function expression language. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.url">Url</a></code> | <code>string</code> | The URL endpoint for the HTTP request. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The body of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#body MediatailorFunction#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of HTTP headers to include in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#headers MediatailorFunction#headers}

---

##### `MethodType`<sup>Optional</sup> <a name="MethodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.methodType"></a>

```csharp
public string MethodType { get; set; }
```

- *Type:* string

The HTTP method type for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#method_type MediatailorFunction#method_type}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.output"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Output { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of output key-value pairs.

Keys must start with session., temp., avail., scte., or be a valid adsRequest directive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `RequestTimeoutMilliseconds`<sup>Optional</sup> <a name="RequestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.requestTimeoutMilliseconds"></a>

```csharp
public double RequestTimeoutMilliseconds { get; set; }
```

- *Type:* double

The timeout in milliseconds for the HTTP request. Maximum value is 2000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#request_timeout_milliseconds MediatailorFunction#request_timeout_milliseconds}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The runtime environment for the function expression language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL endpoint for the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#url MediatailorFunction#url}

---

### MediatailorFunctionSequentialExecutorConfiguration <a name="MediatailorFunctionSequentialExecutorConfiguration" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionSequentialExecutorConfiguration {
    IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct[] FunctionList = null,
    System.Collections.Generic.IDictionary<string, string> Output = null,
    string Runtime = null,
    double TimeoutMilliseconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.functionList">FunctionList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]</code> | The list of functions to execute sequentially. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.output">Output</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of output key-value pairs that define the final output from sequential execution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.runtime">Runtime</a></code> | <code>string</code> | The runtime environment for the function expression language. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.timeoutMilliseconds">TimeoutMilliseconds</a></code> | <code>double</code> | The timeout in milliseconds for the entire sequential execution chain. |

---

##### `FunctionList`<sup>Optional</sup> <a name="FunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.functionList"></a>

```csharp
public IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct[] FunctionList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]

The list of functions to execute sequentially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#function_list MediatailorFunction#function_list}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.output"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Output { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of output key-value pairs that define the final output from sequential execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#output MediatailorFunction#output}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

The runtime environment for the function expression language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#runtime MediatailorFunction#runtime}

---

##### `TimeoutMilliseconds`<sup>Optional</sup> <a name="TimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration.property.timeoutMilliseconds"></a>

```csharp
public double TimeoutMilliseconds { get; set; }
```

- *Type:* double

The timeout in milliseconds for the entire sequential execution chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#timeout_milliseconds MediatailorFunction#timeout_milliseconds}

---

### MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct <a name="MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct {
    string FunctionId = null,
    string RunCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.functionId">FunctionId</a></code> | <code>string</code> | The identifier of the function to execute. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.runCondition">RunCondition</a></code> | <code>string</code> | A conditional expression that determines whether this function should execute. |

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.functionId"></a>

```csharp
public string FunctionId { get; set; }
```

- *Type:* string

The identifier of the function to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#function_id MediatailorFunction#function_id}

---

##### `RunCondition`<sup>Optional</sup> <a name="RunCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct.property.runCondition"></a>

```csharp
public string RunCondition { get; set; }
```

- *Type:* string

A conditional expression that determines whether this function should execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#run_condition MediatailorFunction#run_condition}

---

### MediatailorFunctionTags <a name="MediatailorFunctionTags" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#key MediatailorFunction#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#value MediatailorFunction#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#key MediatailorFunction#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_function#value MediatailorFunction#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorFunctionCustomOutputConfigurationOutputReference <a name="MediatailorFunctionCustomOutputConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionCustomOutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.outputInput">OutputInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.output">Output</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.outputInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.output"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Output { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionCustomOutputConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionCustomOutputConfiguration">MediatailorFunctionCustomOutputConfiguration</a>

---


### MediatailorFunctionHttpRequestConfigurationOutputReference <a name="MediatailorFunctionHttpRequestConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionHttpRequestConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetMethodType">ResetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds">ResetRequestTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetMethodType` <a name="ResetMethodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetMethodType"></a>

```csharp
private void ResetMethodType()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetRequestTimeoutMilliseconds` <a name="ResetRequestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRequestTimeoutMilliseconds"></a>

```csharp
private void ResetRequestTimeoutMilliseconds()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodTypeInput">MethodTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.outputInput">OutputInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput">RequestTimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodType">MethodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.output">Output</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMilliseconds">RequestTimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MethodTypeInput`<sup>Optional</sup> <a name="MethodTypeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodTypeInput"></a>

```csharp
public string MethodTypeInput { get; }
```

- *Type:* string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.outputInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTimeoutMillisecondsInput`<sup>Optional</sup> <a name="RequestTimeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMillisecondsInput"></a>

```csharp
public double RequestTimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MethodType`<sup>Required</sup> <a name="MethodType" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.methodType"></a>

```csharp
public string MethodType { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.output"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Output { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestTimeoutMilliseconds`<sup>Required</sup> <a name="RequestTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.requestTimeoutMilliseconds"></a>

```csharp
public double RequestTimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionHttpRequestConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionHttpRequestConfiguration">MediatailorFunctionHttpRequestConfiguration</a>

---


### MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList <a name="MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.get"></a>

```csharp
private MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]

---


### MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference <a name="MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetFunctionId">ResetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetRunCondition">ResetRunCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionId` <a name="ResetFunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetFunctionId"></a>

```csharp
private void ResetFunctionId()
```

##### `ResetRunCondition` <a name="ResetRunCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.resetRunCondition"></a>

```csharp
private void ResetRunCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runConditionInput">RunConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runCondition">RunCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionIdInput"></a>

```csharp
public string FunctionIdInput { get; }
```

- *Type:* string

---

##### `RunConditionInput`<sup>Optional</sup> <a name="RunConditionInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runConditionInput"></a>

```csharp
public string RunConditionInput { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `RunCondition`<sup>Required</sup> <a name="RunCondition" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.runCondition"></a>

```csharp
public string RunCondition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>

---


### MediatailorFunctionSequentialExecutorConfigurationOutputReference <a name="MediatailorFunctionSequentialExecutorConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionSequentialExecutorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.putFunctionList">PutFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetFunctionList">ResetFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetTimeoutMilliseconds">ResetTimeoutMilliseconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunctionList` <a name="PutFunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.putFunctionList"></a>

```csharp
private void PutFunctionList(IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.putFunctionList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]

---

##### `ResetFunctionList` <a name="ResetFunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetFunctionList"></a>

```csharp
private void ResetFunctionList()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetTimeoutMilliseconds` <a name="ResetTimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.resetTimeoutMilliseconds"></a>

```csharp
private void ResetTimeoutMilliseconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionList">FunctionList</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList">MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionListInput">FunctionListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.outputInput">OutputInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMillisecondsInput">TimeoutMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.output">Output</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMilliseconds">TimeoutMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionList`<sup>Required</sup> <a name="FunctionList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionList"></a>

```csharp
public MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList FunctionList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList">MediatailorFunctionSequentialExecutorConfigurationFunctionListStructList</a>

---

##### `FunctionListInput`<sup>Optional</sup> <a name="FunctionListInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.functionListInput"></a>

```csharp
public IResolvable|MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct[] FunctionListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct">MediatailorFunctionSequentialExecutorConfigurationFunctionListStruct</a>[]

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.outputInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `TimeoutMillisecondsInput`<sup>Optional</sup> <a name="TimeoutMillisecondsInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMillisecondsInput"></a>

```csharp
public double TimeoutMillisecondsInput { get; }
```

- *Type:* double

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.output"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Output { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `TimeoutMilliseconds`<sup>Required</sup> <a name="TimeoutMilliseconds" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.timeoutMilliseconds"></a>

```csharp
public double TimeoutMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionSequentialExecutorConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionSequentialExecutorConfiguration">MediatailorFunctionSequentialExecutorConfiguration</a>

---


### MediatailorFunctionTagsList <a name="MediatailorFunctionTagsList" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.get"></a>

```csharp
private MediatailorFunctionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>[]

---


### MediatailorFunctionTagsOutputReference <a name="MediatailorFunctionTagsOutputReference" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorFunctionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorFunctionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorFunction.MediatailorFunctionTags">MediatailorFunctionTags</a>

---



