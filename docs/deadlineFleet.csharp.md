# `deadlineFleet` Submodule <a name="`deadlineFleet` Submodule" id="@cdktn/provider-awscc.deadlineFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineFleet <a name="DeadlineFleet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet awscc_deadline_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleet(Construct Scope, string Id, DeadlineFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig">DeadlineFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig">DeadlineFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration">PutHostConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetHostConfiguration">ResetHostConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetMinWorkerCount">ResetMinWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration"></a>

```csharp
private void PutConfiguration(DeadlineFleetConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

---

##### `PutHostConfiguration` <a name="PutHostConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration"></a>

```csharp
private void PutHostConfiguration(DeadlineFleetHostConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putHostConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putTags"></a>

```csharp
private void PutTags(IResolvable|DeadlineFleetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHostConfiguration` <a name="ResetHostConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetHostConfiguration"></a>

```csharp
private void ResetHostConfiguration()
```

##### `ResetMinWorkerCount` <a name="ResetMinWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetMinWorkerCount"></a>

```csharp
private void ResetMinWorkerCount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DeadlineFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DeadlineFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeadlineFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeadlineFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference">DeadlineFleetCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference">DeadlineFleetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfiguration">HostConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference">DeadlineFleetHostConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList">DeadlineFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmIdInput">FarmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfigurationInput">HostConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCountInput">MaxWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCountInput">MinWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmId">FarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.capabilities"></a>

```csharp
public DeadlineFleetCapabilitiesOutputReference Capabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference">DeadlineFleetCapabilitiesOutputReference</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configuration"></a>

```csharp
public DeadlineFleetConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference">DeadlineFleetConfigurationOutputReference</a>

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `HostConfiguration`<sup>Required</sup> <a name="HostConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfiguration"></a>

```csharp
public DeadlineFleetHostConfigurationOutputReference HostConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference">DeadlineFleetHostConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tags"></a>

```csharp
public DeadlineFleetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList">DeadlineFleetTagsList</a>

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.configurationInput"></a>

```csharp
public IResolvable|DeadlineFleetConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FarmIdInput`<sup>Optional</sup> <a name="FarmIdInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmIdInput"></a>

```csharp
public string FarmIdInput { get; }
```

- *Type:* string

---

##### `HostConfigurationInput`<sup>Optional</sup> <a name="HostConfigurationInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.hostConfigurationInput"></a>

```csharp
public IResolvable|DeadlineFleetHostConfiguration HostConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

---

##### `MaxWorkerCountInput`<sup>Optional</sup> <a name="MaxWorkerCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCountInput"></a>

```csharp
public double MaxWorkerCountInput { get; }
```

- *Type:* double

---

##### `MinWorkerCountInput`<sup>Optional</sup> <a name="MinWorkerCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCountInput"></a>

```csharp
public double MinWorkerCountInput { get; }
```

- *Type:* double

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tagsInput"></a>

```csharp
public IResolvable|DeadlineFleetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.farmId"></a>

```csharp
public string FarmId { get; }
```

- *Type:* string

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; }
```

- *Type:* double

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineFleetCapabilities <a name="DeadlineFleetCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilities {

};
```


### DeadlineFleetCapabilitiesAmounts <a name="DeadlineFleetCapabilitiesAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesAmounts {

};
```


### DeadlineFleetCapabilitiesAttributes <a name="DeadlineFleetCapabilitiesAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesAttributes {

};
```


### DeadlineFleetConfig <a name="DeadlineFleetConfig" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DeadlineFleetConfiguration Configuration,
    string DisplayName,
    string FarmId,
    double MaxWorkerCount,
    string RoleArn,
    string Description = null,
    DeadlineFleetHostConfiguration HostConfiguration = null,
    double MinWorkerCount = null,
    IResolvable|DeadlineFleetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#configuration DeadlineFleet#configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#display_name DeadlineFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.farmId">FarmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#farm_id DeadlineFleet#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max_worker_count DeadlineFleet#max_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#role_arn DeadlineFleet#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#description DeadlineFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.hostConfiguration">HostConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#host_configuration DeadlineFleet#host_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min_worker_count DeadlineFleet#min_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.configuration"></a>

```csharp
public DeadlineFleetConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#configuration DeadlineFleet#configuration}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#display_name DeadlineFleet#display_name}.

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.farmId"></a>

```csharp
public string FarmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#farm_id DeadlineFleet#farm_id}.

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max_worker_count DeadlineFleet#max_worker_count}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#role_arn DeadlineFleet#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#description DeadlineFleet#description}.

---

##### `HostConfiguration`<sup>Optional</sup> <a name="HostConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.hostConfiguration"></a>

```csharp
public DeadlineFleetHostConfiguration HostConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#host_configuration DeadlineFleet#host_configuration}.

---

##### `MinWorkerCount`<sup>Optional</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min_worker_count DeadlineFleet#min_worker_count}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfig.property.tags"></a>

```csharp
public IResolvable|DeadlineFleetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#tags DeadlineFleet#tags}

---

### DeadlineFleetConfiguration <a name="DeadlineFleetConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfiguration {
    DeadlineFleetConfigurationCustomerManaged CustomerManaged = null,
    DeadlineFleetConfigurationServiceManagedEc2 ServiceManagedEc2 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.customerManaged">CustomerManaged</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#customer_managed DeadlineFleet#customer_managed}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.serviceManagedEc2">ServiceManagedEc2</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#service_managed_ec_2 DeadlineFleet#service_managed_ec_2}. |

---

##### `CustomerManaged`<sup>Optional</sup> <a name="CustomerManaged" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.customerManaged"></a>

```csharp
public DeadlineFleetConfigurationCustomerManaged CustomerManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#customer_managed DeadlineFleet#customer_managed}.

---

##### `ServiceManagedEc2`<sup>Optional</sup> <a name="ServiceManagedEc2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration.property.serviceManagedEc2"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2 ServiceManagedEc2 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#service_managed_ec_2 DeadlineFleet#service_managed_ec_2}.

---

### DeadlineFleetConfigurationCustomerManaged <a name="DeadlineFleetConfigurationCustomerManaged" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManaged {
    DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration AutoScalingConfiguration = null,
    string Mode = null,
    string StorageProfileId = null,
    string TagPropagationMode = null,
    DeadlineFleetConfigurationCustomerManagedWorkerCapabilities WorkerCapabilities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#mode DeadlineFleet#mode}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.storageProfileId">StorageProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.tagPropagationMode">TagPropagationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#tag_propagation_mode DeadlineFleet#tag_propagation_mode}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.workerCapabilities">WorkerCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#worker_capabilities DeadlineFleet#worker_capabilities}. |

---

##### `AutoScalingConfiguration`<sup>Optional</sup> <a name="AutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.autoScalingConfiguration"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration AutoScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#mode DeadlineFleet#mode}.

---

##### `StorageProfileId`<sup>Optional</sup> <a name="StorageProfileId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.storageProfileId"></a>

```csharp
public string StorageProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}.

---

##### `TagPropagationMode`<sup>Optional</sup> <a name="TagPropagationMode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.tagPropagationMode"></a>

```csharp
public string TagPropagationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#tag_propagation_mode DeadlineFleet#tag_propagation_mode}.

---

##### `WorkerCapabilities`<sup>Optional</sup> <a name="WorkerCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged.property.workerCapabilities"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilities WorkerCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#worker_capabilities DeadlineFleet#worker_capabilities}.

---

### DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration <a name="DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration {
    double ScaleOutWorkersPerMinute = null,
    double StandbyWorkerCount = null,
    double WorkerIdleDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.scaleOutWorkersPerMinute">ScaleOutWorkersPerMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.standbyWorkerCount">StandbyWorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.workerIdleDurationSeconds">WorkerIdleDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}. |

---

##### `ScaleOutWorkersPerMinute`<sup>Optional</sup> <a name="ScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.scaleOutWorkersPerMinute"></a>

```csharp
public double ScaleOutWorkersPerMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}.

---

##### `StandbyWorkerCount`<sup>Optional</sup> <a name="StandbyWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.standbyWorkerCount"></a>

```csharp
public double StandbyWorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}.

---

##### `WorkerIdleDurationSeconds`<sup>Optional</sup> <a name="WorkerIdleDurationSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration.property.workerIdleDurationSeconds"></a>

```csharp
public double WorkerIdleDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilities <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilities {
    DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount AcceleratorCount = null,
    DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB AcceleratorTotalMemoryMiB = null,
    string[] AcceleratorTypes = null,
    string CpuArchitectureType = null,
    IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts[] CustomAmounts = null,
    IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes[] CustomAttributes = null,
    DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB MemoryMiB = null,
    string OsFamily = null,
    DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount VCpuCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_count DeadlineFleet#accelerator_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_total_memory_mi_b DeadlineFleet#accelerator_total_memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_types DeadlineFleet#accelerator_types}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.cpuArchitectureType">CpuArchitectureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAmounts">CustomAmounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAttributes">CustomAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorCount"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount AcceleratorCount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_count DeadlineFleet#accelerator_count}.

---

##### `AcceleratorTotalMemoryMiB`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTotalMemoryMiB"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB AcceleratorTotalMemoryMiB { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_total_memory_mi_b DeadlineFleet#accelerator_total_memory_mi_b}.

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_types DeadlineFleet#accelerator_types}.

---

##### `CpuArchitectureType`<sup>Optional</sup> <a name="CpuArchitectureType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.cpuArchitectureType"></a>

```csharp
public string CpuArchitectureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}.

---

##### `CustomAmounts`<sup>Optional</sup> <a name="CustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAmounts"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts[] CustomAmounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}.

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.customAttributes"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes[] CustomAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}.

---

##### `MemoryMiB`<sup>Optional</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.memoryMiB"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB MemoryMiB { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}.

---

##### `VCpuCount`<sup>Optional</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities.property.vCpuCount"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount VCpuCount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts {
    double Max = null,
    double Min = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes {
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#values DeadlineFleet#values}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#values DeadlineFleet#values}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2 <a name="DeadlineFleetConfigurationServiceManagedEc2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2 {
    DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration AutoScalingConfiguration = null,
    DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities InstanceCapabilities = null,
    DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions InstanceMarketOptions = null,
    DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration PersistentVolumeConfiguration = null,
    string StorageProfileId = null,
    DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration VpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceCapabilities">InstanceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#instance_capabilities DeadlineFleet#instance_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#instance_market_options DeadlineFleet#instance_market_options}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.persistentVolumeConfiguration">PersistentVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#persistent_volume_configuration DeadlineFleet#persistent_volume_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.storageProfileId">StorageProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#vpc_configuration DeadlineFleet#vpc_configuration}. |

---

##### `AutoScalingConfiguration`<sup>Optional</sup> <a name="AutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.autoScalingConfiguration"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration AutoScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#auto_scaling_configuration DeadlineFleet#auto_scaling_configuration}.

---

##### `InstanceCapabilities`<sup>Optional</sup> <a name="InstanceCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceCapabilities"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities InstanceCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#instance_capabilities DeadlineFleet#instance_capabilities}.

---

##### `InstanceMarketOptions`<sup>Optional</sup> <a name="InstanceMarketOptions" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.instanceMarketOptions"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions InstanceMarketOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#instance_market_options DeadlineFleet#instance_market_options}.

---

##### `PersistentVolumeConfiguration`<sup>Optional</sup> <a name="PersistentVolumeConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.persistentVolumeConfiguration"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration PersistentVolumeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#persistent_volume_configuration DeadlineFleet#persistent_volume_configuration}.

---

##### `StorageProfileId`<sup>Optional</sup> <a name="StorageProfileId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.storageProfileId"></a>

```csharp
public string StorageProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#storage_profile_id DeadlineFleet#storage_profile_id}.

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2.property.vpcConfiguration"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration VpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#vpc_configuration DeadlineFleet#vpc_configuration}.

---

### DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration <a name="DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration {
    double ScaleOutWorkersPerMinute = null,
    double StandbyWorkerCount = null,
    double WorkerIdleDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.scaleOutWorkersPerMinute">ScaleOutWorkersPerMinute</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.standbyWorkerCount">StandbyWorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.workerIdleDurationSeconds">WorkerIdleDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}. |

---

##### `ScaleOutWorkersPerMinute`<sup>Optional</sup> <a name="ScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.scaleOutWorkersPerMinute"></a>

```csharp
public double ScaleOutWorkersPerMinute { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#scale_out_workers_per_minute DeadlineFleet#scale_out_workers_per_minute}.

---

##### `StandbyWorkerCount`<sup>Optional</sup> <a name="StandbyWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.standbyWorkerCount"></a>

```csharp
public double StandbyWorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#standby_worker_count DeadlineFleet#standby_worker_count}.

---

##### `WorkerIdleDurationSeconds`<sup>Optional</sup> <a name="WorkerIdleDurationSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration.property.workerIdleDurationSeconds"></a>

```csharp
public double WorkerIdleDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#worker_idle_duration_seconds DeadlineFleet#worker_idle_duration_seconds}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities {
    DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities AcceleratorCapabilities = null,
    string[] AllowedInstanceTypes = null,
    string CpuArchitectureType = null,
    IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts[] CustomAmounts = null,
    IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes[] CustomAttributes = null,
    string[] ExcludedInstanceTypes = null,
    DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB MemoryMiB = null,
    string OsFamily = null,
    DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume RootEbsVolume = null,
    DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount VCpuCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.acceleratorCapabilities">AcceleratorCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_capabilities DeadlineFleet#accelerator_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#allowed_instance_types DeadlineFleet#allowed_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.cpuArchitectureType">CpuArchitectureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAmounts">CustomAmounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAttributes">CustomAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#excluded_instance_types DeadlineFleet#excluded_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.osFamily">OsFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.rootEbsVolume">RootEbsVolume</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#root_ebs_volume DeadlineFleet#root_ebs_volume}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}. |

---

##### `AcceleratorCapabilities`<sup>Optional</sup> <a name="AcceleratorCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.acceleratorCapabilities"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities AcceleratorCapabilities { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#accelerator_capabilities DeadlineFleet#accelerator_capabilities}.

---

##### `AllowedInstanceTypes`<sup>Optional</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#allowed_instance_types DeadlineFleet#allowed_instance_types}.

---

##### `CpuArchitectureType`<sup>Optional</sup> <a name="CpuArchitectureType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.cpuArchitectureType"></a>

```csharp
public string CpuArchitectureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#cpu_architecture_type DeadlineFleet#cpu_architecture_type}.

---

##### `CustomAmounts`<sup>Optional</sup> <a name="CustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAmounts"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts[] CustomAmounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_amounts DeadlineFleet#custom_amounts}.

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.customAttributes"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes[] CustomAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#custom_attributes DeadlineFleet#custom_attributes}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#excluded_instance_types DeadlineFleet#excluded_instance_types}.

---

##### `MemoryMiB`<sup>Optional</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.memoryMiB"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB MemoryMiB { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#memory_mi_b DeadlineFleet#memory_mi_b}.

---

##### `OsFamily`<sup>Optional</sup> <a name="OsFamily" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.osFamily"></a>

```csharp
public string OsFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#os_family DeadlineFleet#os_family}.

---

##### `RootEbsVolume`<sup>Optional</sup> <a name="RootEbsVolume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.rootEbsVolume"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume RootEbsVolume { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#root_ebs_volume DeadlineFleet#root_ebs_volume}.

---

##### `VCpuCount`<sup>Optional</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities.property.vCpuCount"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount VCpuCount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#v_cpu_count DeadlineFleet#v_cpu_count}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities {
    DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount Count = null,
    IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections[] Selections = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.count">Count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#count DeadlineFleet#count}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.selections">Selections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#selections DeadlineFleet#selections}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.count"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount Count { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#count DeadlineFleet#count}.

---

##### `Selections`<sup>Optional</sup> <a name="Selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities.property.selections"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections[] Selections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#selections DeadlineFleet#selections}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections {
    string Name = null,
    string Runtime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#runtime DeadlineFleet#runtime}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#runtime DeadlineFleet#runtime}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts {
    double Max = null,
    double Min = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes {
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#values DeadlineFleet#values}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#name DeadlineFleet#name}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#values DeadlineFleet#values}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume {
    double Iops = null,
    double SizeGiB = null,
    double ThroughputMiB = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.sizeGiB">SizeGiB</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.throughputMiB">ThroughputMiB</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}.

---

##### `SizeGiB`<sup>Optional</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.sizeGiB"></a>

```csharp
public double SizeGiB { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}.

---

##### `ThroughputMiB`<sup>Optional</sup> <a name="ThroughputMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume.property.throughputMiB"></a>

```csharp
public double ThroughputMiB { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#max DeadlineFleet#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#min DeadlineFleet#min}.

---

### DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#type DeadlineFleet#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#type DeadlineFleet#type}.

---

### DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration <a name="DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration {
    double Iops = null,
    double LastUsedTtlHours = null,
    string MountPath = null,
    double SizeGiB = null,
    double ThroughputMiB = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.lastUsedTtlHours">LastUsedTtlHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#last_used_ttl_hours DeadlineFleet#last_used_ttl_hours}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.mountPath">MountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#mount_path DeadlineFleet#mount_path}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.sizeGiB">SizeGiB</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.throughputMiB">ThroughputMiB</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#iops DeadlineFleet#iops}.

---

##### `LastUsedTtlHours`<sup>Optional</sup> <a name="LastUsedTtlHours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.lastUsedTtlHours"></a>

```csharp
public double LastUsedTtlHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#last_used_ttl_hours DeadlineFleet#last_used_ttl_hours}.

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.mountPath"></a>

```csharp
public string MountPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#mount_path DeadlineFleet#mount_path}.

---

##### `SizeGiB`<sup>Optional</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.sizeGiB"></a>

```csharp
public double SizeGiB { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#size_gi_b DeadlineFleet#size_gi_b}.

---

##### `ThroughputMiB`<sup>Optional</sup> <a name="ThroughputMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration.property.throughputMiB"></a>

```csharp
public double ThroughputMiB { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#throughput_mi_b DeadlineFleet#throughput_mi_b}.

---

### DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration <a name="DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration {
    string[] ResourceConfigurationArns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.property.resourceConfigurationArns">ResourceConfigurationArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#resource_configuration_arns DeadlineFleet#resource_configuration_arns}. |

---

##### `ResourceConfigurationArns`<sup>Optional</sup> <a name="ResourceConfigurationArns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration.property.resourceConfigurationArns"></a>

```csharp
public string[] ResourceConfigurationArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#resource_configuration_arns DeadlineFleet#resource_configuration_arns}.

---

### DeadlineFleetHostConfiguration <a name="DeadlineFleetHostConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetHostConfiguration {
    string ScriptBody = null,
    double ScriptTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptBody">ScriptBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#script_body DeadlineFleet#script_body}. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptTimeoutSeconds">ScriptTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#script_timeout_seconds DeadlineFleet#script_timeout_seconds}. |

---

##### `ScriptBody`<sup>Optional</sup> <a name="ScriptBody" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptBody"></a>

```csharp
public string ScriptBody { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#script_body DeadlineFleet#script_body}.

---

##### `ScriptTimeoutSeconds`<sup>Optional</sup> <a name="ScriptTimeoutSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration.property.scriptTimeoutSeconds"></a>

```csharp
public double ScriptTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#script_timeout_seconds DeadlineFleet#script_timeout_seconds}.

---

### DeadlineFleetTags <a name="DeadlineFleetTags" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#key DeadlineFleet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/deadline_fleet#value DeadlineFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineFleetCapabilitiesAmountsList <a name="DeadlineFleetCapabilitiesAmountsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesAmountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.get"></a>

```csharp
private DeadlineFleetCapabilitiesAmountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeadlineFleetCapabilitiesAmountsOutputReference <a name="DeadlineFleetCapabilitiesAmountsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesAmountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts">DeadlineFleetCapabilitiesAmounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsOutputReference.property.internalValue"></a>

```csharp
public DeadlineFleetCapabilitiesAmounts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmounts">DeadlineFleetCapabilitiesAmounts</a>

---


### DeadlineFleetCapabilitiesAttributesList <a name="DeadlineFleetCapabilitiesAttributesList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.get"></a>

```csharp
private DeadlineFleetCapabilitiesAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DeadlineFleetCapabilitiesAttributesOutputReference <a name="DeadlineFleetCapabilitiesAttributesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes">DeadlineFleetCapabilitiesAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesOutputReference.property.internalValue"></a>

```csharp
public DeadlineFleetCapabilitiesAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributes">DeadlineFleetCapabilitiesAttributes</a>

---


### DeadlineFleetCapabilitiesOutputReference <a name="DeadlineFleetCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.amounts">Amounts</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList">DeadlineFleetCapabilitiesAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList">DeadlineFleetCapabilitiesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities">DeadlineFleetCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amounts`<sup>Required</sup> <a name="Amounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.amounts"></a>

```csharp
public DeadlineFleetCapabilitiesAmountsList Amounts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAmountsList">DeadlineFleetCapabilitiesAmountsList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.attributes"></a>

```csharp
public DeadlineFleetCapabilitiesAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesAttributesList">DeadlineFleetCapabilitiesAttributesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DeadlineFleetCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetCapabilities">DeadlineFleetCapabilities</a>

---


### DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference <a name="DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute">ResetScaleOutWorkersPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetStandbyWorkerCount">ResetStandbyWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds">ResetWorkerIdleDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleOutWorkersPerMinute` <a name="ResetScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute"></a>

```csharp
private void ResetScaleOutWorkersPerMinute()
```

##### `ResetStandbyWorkerCount` <a name="ResetStandbyWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetStandbyWorkerCount"></a>

```csharp
private void ResetStandbyWorkerCount()
```

##### `ResetWorkerIdleDurationSeconds` <a name="ResetWorkerIdleDurationSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds"></a>

```csharp
private void ResetWorkerIdleDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput">ScaleOutWorkersPerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCountInput">StandbyWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput">WorkerIdleDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">ScaleOutWorkersPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount">StandbyWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">WorkerIdleDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleOutWorkersPerMinuteInput`<sup>Optional</sup> <a name="ScaleOutWorkersPerMinuteInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput"></a>

```csharp
public double ScaleOutWorkersPerMinuteInput { get; }
```

- *Type:* double

---

##### `StandbyWorkerCountInput`<sup>Optional</sup> <a name="StandbyWorkerCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCountInput"></a>

```csharp
public double StandbyWorkerCountInput { get; }
```

- *Type:* double

---

##### `WorkerIdleDurationSecondsInput`<sup>Optional</sup> <a name="WorkerIdleDurationSecondsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput"></a>

```csharp
public double WorkerIdleDurationSecondsInput { get; }
```

- *Type:* double

---

##### `ScaleOutWorkersPerMinute`<sup>Required</sup> <a name="ScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```csharp
public double ScaleOutWorkersPerMinute { get; }
```

- *Type:* double

---

##### `StandbyWorkerCount`<sup>Required</sup> <a name="StandbyWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```csharp
public double StandbyWorkerCount { get; }
```

- *Type:* double

---

##### `WorkerIdleDurationSeconds`<sup>Required</sup> <a name="WorkerIdleDurationSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```csharp
public double WorkerIdleDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---


### DeadlineFleetConfigurationCustomerManagedOutputReference <a name="DeadlineFleetConfigurationCustomerManagedOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration">PutAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities">PutWorkerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetAutoScalingConfiguration">ResetAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetStorageProfileId">ResetStorageProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetTagPropagationMode">ResetTagPropagationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetWorkerCapabilities">ResetWorkerCapabilities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScalingConfiguration` <a name="PutAutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration"></a>

```csharp
private void PutAutoScalingConfiguration(DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putAutoScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---

##### `PutWorkerCapabilities` <a name="PutWorkerCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities"></a>

```csharp
private void PutWorkerCapabilities(DeadlineFleetConfigurationCustomerManagedWorkerCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.putWorkerCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---

##### `ResetAutoScalingConfiguration` <a name="ResetAutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetAutoScalingConfiguration"></a>

```csharp
private void ResetAutoScalingConfiguration()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetStorageProfileId` <a name="ResetStorageProfileId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetStorageProfileId"></a>

```csharp
private void ResetStorageProfileId()
```

##### `ResetTagPropagationMode` <a name="ResetTagPropagationMode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetTagPropagationMode"></a>

```csharp
private void ResetTagPropagationMode()
```

##### `ResetWorkerCapabilities` <a name="ResetWorkerCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.resetWorkerCapabilities"></a>

```csharp
private void ResetWorkerCapabilities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities">WorkerCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfigurationInput">AutoScalingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileIdInput">StorageProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationModeInput">TagPropagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilitiesInput">WorkerCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId">StorageProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode">TagPropagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingConfiguration`<sup>Required</sup> <a name="AutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfiguration"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference AutoScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference">DeadlineFleetConfigurationCustomerManagedAutoScalingConfigurationOutputReference</a>

---

##### `WorkerCapabilities`<sup>Required</sup> <a name="WorkerCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilities"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference WorkerCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference</a>

---

##### `AutoScalingConfigurationInput`<sup>Optional</sup> <a name="AutoScalingConfigurationInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.autoScalingConfigurationInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration AutoScalingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration">DeadlineFleetConfigurationCustomerManagedAutoScalingConfiguration</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `StorageProfileIdInput`<sup>Optional</sup> <a name="StorageProfileIdInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileIdInput"></a>

```csharp
public string StorageProfileIdInput { get; }
```

- *Type:* string

---

##### `TagPropagationModeInput`<sup>Optional</sup> <a name="TagPropagationModeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationModeInput"></a>

```csharp
public string TagPropagationModeInput { get; }
```

- *Type:* string

---

##### `WorkerCapabilitiesInput`<sup>Optional</sup> <a name="WorkerCapabilitiesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.workerCapabilitiesInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilities WorkerCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `StorageProfileId`<sup>Required</sup> <a name="StorageProfileId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.storageProfileId"></a>

```csharp
public string StorageProfileId { get; }
```

- *Type:* string

---

##### `TagPropagationMode`<sup>Required</sup> <a name="TagPropagationMode" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.tagPropagationMode"></a>

```csharp
public string TagPropagationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get"></a>

```csharp
private DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get"></a>

```csharp
private DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount">PutAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB">PutAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAmounts">PutCustomAmounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAttributes">PutCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB">PutMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount">PutVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTotalMemoryMiB">ResetAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCpuArchitectureType">ResetCpuArchitectureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAmounts">ResetCustomAmounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetMemoryMiB">ResetMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetVCpuCount">ResetVCpuCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCount` <a name="PutAcceleratorCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount"></a>

```csharp
private void PutAcceleratorCount(DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---

##### `PutAcceleratorTotalMemoryMiB` <a name="PutAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB"></a>

```csharp
private void PutAcceleratorTotalMemoryMiB(DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putAcceleratorTotalMemoryMiB.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---

##### `PutCustomAmounts` <a name="PutCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAmounts"></a>

```csharp
private void PutCustomAmounts(IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAmounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]

---

##### `PutCustomAttributes` <a name="PutCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAttributes"></a>

```csharp
private void PutCustomAttributes(IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]

---

##### `PutMemoryMiB` <a name="PutMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB"></a>

```csharp
private void PutMemoryMiB(DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putMemoryMiB.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---

##### `PutVCpuCount` <a name="PutVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount"></a>

```csharp
private void PutVCpuCount(DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.putVCpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorTotalMemoryMiB` <a name="ResetAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTotalMemoryMiB"></a>

```csharp
private void ResetAcceleratorTotalMemoryMiB()
```

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetAcceleratorTypes"></a>

```csharp
private void ResetAcceleratorTypes()
```

##### `ResetCpuArchitectureType` <a name="ResetCpuArchitectureType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCpuArchitectureType"></a>

```csharp
private void ResetCpuArchitectureType()
```

##### `ResetCustomAmounts` <a name="ResetCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAmounts"></a>

```csharp
private void ResetCustomAmounts()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetMemoryMiB` <a name="ResetMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetMemoryMiB"></a>

```csharp
private void ResetMemoryMiB()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetVCpuCount` <a name="ResetVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.resetVCpuCount"></a>

```csharp
private void ResetVCpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB">AcceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts">CustomAmounts</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiBInput">AcceleratorTotalMemoryMiBInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureTypeInput">CpuArchitectureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmountsInput">CustomAmountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributesInput">CustomAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiBInput">MemoryMiBInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCountInput">VCpuCountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType">CpuArchitectureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCount"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference AcceleratorCount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMiB`<sup>Required</sup> <a name="AcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiB"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference AcceleratorTotalMemoryMiB { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `CustomAmounts`<sup>Required</sup> <a name="CustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmounts"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList CustomAmounts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmountsList</a>

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributes"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList CustomAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributesList</a>

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiB"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference MemoryMiB { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiBOutputReference</a>

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCount"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference VCpuCount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorCountInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount AcceleratorCountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorCount</a>

---

##### `AcceleratorTotalMemoryMiBInput`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTotalMemoryMiBInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB AcceleratorTotalMemoryMiBInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesAcceleratorTotalMemoryMiB</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypesInput"></a>

```csharp
public string[] AcceleratorTypesInput { get; }
```

- *Type:* string[]

---

##### `CpuArchitectureTypeInput`<sup>Optional</sup> <a name="CpuArchitectureTypeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureTypeInput"></a>

```csharp
public string CpuArchitectureTypeInput { get; }
```

- *Type:* string

---

##### `CustomAmountsInput`<sup>Optional</sup> <a name="CustomAmountsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAmountsInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts[] CustomAmountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAmounts</a>[]

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.customAttributesInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes[] CustomAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesCustomAttributes</a>[]

---

##### `MemoryMiBInput`<sup>Optional</sup> <a name="MemoryMiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.memoryMiBInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB MemoryMiBInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesMemoryMiB</a>

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `VCpuCountInput`<sup>Optional</sup> <a name="VCpuCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.vCpuCountInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount VCpuCountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; }
```

- *Type:* string[]

---

##### `CpuArchitectureType`<sup>Required</sup> <a name="CpuArchitectureType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```csharp
public string CpuArchitectureType { get; }
```

- *Type:* string

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilities">DeadlineFleetConfigurationCustomerManagedWorkerCapabilities</a>

---


### DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference <a name="DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount">DeadlineFleetConfigurationCustomerManagedWorkerCapabilitiesVCpuCount</a>

---


### DeadlineFleetConfigurationOutputReference <a name="DeadlineFleetConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged">PutCustomerManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2">PutServiceManagedEc2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetCustomerManaged">ResetCustomerManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetServiceManagedEc2">ResetServiceManagedEc2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManaged` <a name="PutCustomerManaged" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged"></a>

```csharp
private void PutCustomerManaged(DeadlineFleetConfigurationCustomerManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putCustomerManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

---

##### `PutServiceManagedEc2` <a name="PutServiceManagedEc2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2"></a>

```csharp
private void PutServiceManagedEc2(DeadlineFleetConfigurationServiceManagedEc2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.putServiceManagedEc2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

---

##### `ResetCustomerManaged` <a name="ResetCustomerManaged" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetCustomerManaged"></a>

```csharp
private void ResetCustomerManaged()
```

##### `ResetServiceManagedEc2` <a name="ResetServiceManagedEc2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.resetServiceManagedEc2"></a>

```csharp
private void ResetServiceManagedEc2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManaged">CustomerManaged</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference">DeadlineFleetConfigurationCustomerManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2">ServiceManagedEc2</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference">DeadlineFleetConfigurationServiceManagedEc2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManagedInput">CustomerManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2Input">ServiceManagedEc2Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManaged`<sup>Required</sup> <a name="CustomerManaged" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManaged"></a>

```csharp
public DeadlineFleetConfigurationCustomerManagedOutputReference CustomerManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManagedOutputReference">DeadlineFleetConfigurationCustomerManagedOutputReference</a>

---

##### `ServiceManagedEc2`<sup>Required</sup> <a name="ServiceManagedEc2" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2OutputReference ServiceManagedEc2 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference">DeadlineFleetConfigurationServiceManagedEc2OutputReference</a>

---

##### `CustomerManagedInput`<sup>Optional</sup> <a name="CustomerManagedInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.customerManagedInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationCustomerManaged CustomerManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationCustomerManaged">DeadlineFleetConfigurationCustomerManaged</a>

---

##### `ServiceManagedEc2Input`<sup>Optional</sup> <a name="ServiceManagedEc2Input" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.serviceManagedEc2Input"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2 ServiceManagedEc2Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfiguration">DeadlineFleetConfiguration</a>

---


### DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute">ResetScaleOutWorkersPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetStandbyWorkerCount">ResetStandbyWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds">ResetWorkerIdleDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleOutWorkersPerMinute` <a name="ResetScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetScaleOutWorkersPerMinute"></a>

```csharp
private void ResetScaleOutWorkersPerMinute()
```

##### `ResetStandbyWorkerCount` <a name="ResetStandbyWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetStandbyWorkerCount"></a>

```csharp
private void ResetStandbyWorkerCount()
```

##### `ResetWorkerIdleDurationSeconds` <a name="ResetWorkerIdleDurationSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.resetWorkerIdleDurationSeconds"></a>

```csharp
private void ResetWorkerIdleDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput">ScaleOutWorkersPerMinuteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCountInput">StandbyWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput">WorkerIdleDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute">ScaleOutWorkersPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount">StandbyWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds">WorkerIdleDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleOutWorkersPerMinuteInput`<sup>Optional</sup> <a name="ScaleOutWorkersPerMinuteInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinuteInput"></a>

```csharp
public double ScaleOutWorkersPerMinuteInput { get; }
```

- *Type:* double

---

##### `StandbyWorkerCountInput`<sup>Optional</sup> <a name="StandbyWorkerCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCountInput"></a>

```csharp
public double StandbyWorkerCountInput { get; }
```

- *Type:* double

---

##### `WorkerIdleDurationSecondsInput`<sup>Optional</sup> <a name="WorkerIdleDurationSecondsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSecondsInput"></a>

```csharp
public double WorkerIdleDurationSecondsInput { get; }
```

- *Type:* double

---

##### `ScaleOutWorkersPerMinute`<sup>Required</sup> <a name="ScaleOutWorkersPerMinute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.scaleOutWorkersPerMinute"></a>

```csharp
public double ScaleOutWorkersPerMinute { get; }
```

- *Type:* double

---

##### `StandbyWorkerCount`<sup>Required</sup> <a name="StandbyWorkerCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.standbyWorkerCount"></a>

```csharp
public double StandbyWorkerCount { get; }
```

- *Type:* double

---

##### `WorkerIdleDurationSeconds`<sup>Required</sup> <a name="WorkerIdleDurationSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.workerIdleDurationSeconds"></a>

```csharp
public double WorkerIdleDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount">PutCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putSelections">PutSelections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetSelections">ResetSelections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCount` <a name="PutCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount"></a>

```csharp
private void PutCount(DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---

##### `PutSelections` <a name="PutSelections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putSelections"></a>

```csharp
private void PutSelections(IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.putSelections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]

---

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetSelections` <a name="ResetSelections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.resetSelections"></a>

```csharp
private void ResetSelections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count">Count</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections">Selections</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.countInput">CountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selectionsInput">SelectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.count"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference Count { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCountOutputReference</a>

---

##### `Selections`<sup>Required</sup> <a name="Selections" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selections"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList Selections { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.countInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount CountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesCount</a>

---

##### `SelectionsInput`<sup>Optional</sup> <a name="SelectionsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.selectionsInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections[] SelectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get"></a>

```csharp
private DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>[]

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesSelections</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get"></a>

```csharp
private DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get"></a>

```csharp
private DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities">PutAcceleratorCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAmounts">PutCustomAmounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAttributes">PutCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB">PutMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume">PutRootEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount">PutVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAcceleratorCapabilities">ResetAcceleratorCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAllowedInstanceTypes">ResetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCpuArchitectureType">ResetCpuArchitectureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAmounts">ResetCustomAmounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetMemoryMiB">ResetMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetOsFamily">ResetOsFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetRootEbsVolume">ResetRootEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetVCpuCount">ResetVCpuCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCapabilities` <a name="PutAcceleratorCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities"></a>

```csharp
private void PutAcceleratorCapabilities(DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putAcceleratorCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---

##### `PutCustomAmounts` <a name="PutCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAmounts"></a>

```csharp
private void PutCustomAmounts(IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAmounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]

---

##### `PutCustomAttributes` <a name="PutCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAttributes"></a>

```csharp
private void PutCustomAttributes(IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]

---

##### `PutMemoryMiB` <a name="PutMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB"></a>

```csharp
private void PutMemoryMiB(DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putMemoryMiB.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---

##### `PutRootEbsVolume` <a name="PutRootEbsVolume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume"></a>

```csharp
private void PutRootEbsVolume(DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putRootEbsVolume.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---

##### `PutVCpuCount` <a name="PutVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount"></a>

```csharp
private void PutVCpuCount(DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.putVCpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---

##### `ResetAcceleratorCapabilities` <a name="ResetAcceleratorCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAcceleratorCapabilities"></a>

```csharp
private void ResetAcceleratorCapabilities()
```

##### `ResetAllowedInstanceTypes` <a name="ResetAllowedInstanceTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetAllowedInstanceTypes"></a>

```csharp
private void ResetAllowedInstanceTypes()
```

##### `ResetCpuArchitectureType` <a name="ResetCpuArchitectureType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCpuArchitectureType"></a>

```csharp
private void ResetCpuArchitectureType()
```

##### `ResetCustomAmounts` <a name="ResetCustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAmounts"></a>

```csharp
private void ResetCustomAmounts()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetCustomAttributes"></a>

```csharp
private void ResetCustomAttributes()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetExcludedInstanceTypes"></a>

```csharp
private void ResetExcludedInstanceTypes()
```

##### `ResetMemoryMiB` <a name="ResetMemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetMemoryMiB"></a>

```csharp
private void ResetMemoryMiB()
```

##### `ResetOsFamily` <a name="ResetOsFamily" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetOsFamily"></a>

```csharp
private void ResetOsFamily()
```

##### `ResetRootEbsVolume` <a name="ResetRootEbsVolume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetRootEbsVolume"></a>

```csharp
private void ResetRootEbsVolume()
```

##### `ResetVCpuCount` <a name="ResetVCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.resetVCpuCount"></a>

```csharp
private void ResetVCpuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities">AcceleratorCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts">CustomAmounts</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB">MemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume">RootEbsVolume</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount">VCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilitiesInput">AcceleratorCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureTypeInput">CpuArchitectureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmountsInput">CustomAmountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributesInput">CustomAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiBInput">MemoryMiBInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamilyInput">OsFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolumeInput">RootEbsVolumeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCountInput">VCpuCountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType">CpuArchitectureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily">OsFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCapabilities`<sup>Required</sup> <a name="AcceleratorCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilities"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference AcceleratorCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilitiesOutputReference</a>

---

##### `CustomAmounts`<sup>Required</sup> <a name="CustomAmounts" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmounts"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList CustomAmounts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmountsList</a>

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributes"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList CustomAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributesList</a>

---

##### `MemoryMiB`<sup>Required</sup> <a name="MemoryMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiB"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference MemoryMiB { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiBOutputReference</a>

---

##### `RootEbsVolume`<sup>Required</sup> <a name="RootEbsVolume" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolume"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference RootEbsVolume { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference</a>

---

##### `VCpuCount`<sup>Required</sup> <a name="VCpuCount" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCount"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference VCpuCount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference</a>

---

##### `AcceleratorCapabilitiesInput`<sup>Optional</sup> <a name="AcceleratorCapabilitiesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.acceleratorCapabilitiesInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities AcceleratorCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesAcceleratorCapabilities</a>

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypesInput"></a>

```csharp
public string[] AllowedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `CpuArchitectureTypeInput`<sup>Optional</sup> <a name="CpuArchitectureTypeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureTypeInput"></a>

```csharp
public string CpuArchitectureTypeInput { get; }
```

- *Type:* string

---

##### `CustomAmountsInput`<sup>Optional</sup> <a name="CustomAmountsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAmountsInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts[] CustomAmountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAmounts</a>[]

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.customAttributesInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes[] CustomAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesCustomAttributes</a>[]

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypesInput"></a>

```csharp
public string[] ExcludedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `MemoryMiBInput`<sup>Optional</sup> <a name="MemoryMiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.memoryMiBInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB MemoryMiBInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesMemoryMiB</a>

---

##### `OsFamilyInput`<sup>Optional</sup> <a name="OsFamilyInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamilyInput"></a>

```csharp
public string OsFamilyInput { get; }
```

- *Type:* string

---

##### `RootEbsVolumeInput`<sup>Optional</sup> <a name="RootEbsVolumeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.rootEbsVolumeInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume RootEbsVolumeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---

##### `VCpuCountInput`<sup>Optional</sup> <a name="VCpuCountInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.vCpuCountInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount VCpuCountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `CpuArchitectureType`<sup>Required</sup> <a name="CpuArchitectureType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.cpuArchitectureType"></a>

```csharp
public string CpuArchitectureType { get; }
```

- *Type:* string

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `OsFamily`<sup>Required</sup> <a name="OsFamily" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.osFamily"></a>

```csharp
public string OsFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetSizeGiB">ResetSizeGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetThroughputMiB">ResetThroughputMiB</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetSizeGiB` <a name="ResetSizeGiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetSizeGiB"></a>

```csharp
private void ResetSizeGiB()
```

##### `ResetThroughputMiB` <a name="ResetThroughputMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.resetThroughputMiB"></a>

```csharp
private void ResetThroughputMiB()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiBInput">SizeGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiBInput">ThroughputMiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB">SizeGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB">ThroughputMiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `SizeGiBInput`<sup>Optional</sup> <a name="SizeGiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiBInput"></a>

```csharp
public double SizeGiBInput { get; }
```

- *Type:* double

---

##### `ThroughputMiBInput`<sup>Optional</sup> <a name="ThroughputMiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiBInput"></a>

```csharp
public double ThroughputMiBInput { get; }
```

- *Type:* double

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `SizeGiB`<sup>Required</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.sizeGiB"></a>

```csharp
public double SizeGiB { get; }
```

- *Type:* double

---

##### `ThroughputMiB`<sup>Required</sup> <a name="ThroughputMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.throughputMiB"></a>

```csharp
public double ThroughputMiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolumeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesRootEbsVolume</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesVCpuCount</a>

---


### DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---


### DeadlineFleetConfigurationServiceManagedEc2OutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2OutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration">PutAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities">PutInstanceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceMarketOptions">PutInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration">PutPersistentVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetAutoScalingConfiguration">ResetAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceCapabilities">ResetInstanceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceMarketOptions">ResetInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetPersistentVolumeConfiguration">ResetPersistentVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetStorageProfileId">ResetStorageProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScalingConfiguration` <a name="PutAutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration"></a>

```csharp
private void PutAutoScalingConfiguration(DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putAutoScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---

##### `PutInstanceCapabilities` <a name="PutInstanceCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities"></a>

```csharp
private void PutInstanceCapabilities(DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---

##### `PutInstanceMarketOptions` <a name="PutInstanceMarketOptions" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceMarketOptions"></a>

```csharp
private void PutInstanceMarketOptions(DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putInstanceMarketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---

##### `PutPersistentVolumeConfiguration` <a name="PutPersistentVolumeConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration"></a>

```csharp
private void PutPersistentVolumeConfiguration(DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putPersistentVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---

##### `ResetAutoScalingConfiguration` <a name="ResetAutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetAutoScalingConfiguration"></a>

```csharp
private void ResetAutoScalingConfiguration()
```

##### `ResetInstanceCapabilities` <a name="ResetInstanceCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceCapabilities"></a>

```csharp
private void ResetInstanceCapabilities()
```

##### `ResetInstanceMarketOptions` <a name="ResetInstanceMarketOptions" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetInstanceMarketOptions"></a>

```csharp
private void ResetInstanceMarketOptions()
```

##### `ResetPersistentVolumeConfiguration` <a name="ResetPersistentVolumeConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetPersistentVolumeConfiguration"></a>

```csharp
private void ResetPersistentVolumeConfiguration()
```

##### `ResetStorageProfileId` <a name="ResetStorageProfileId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetStorageProfileId"></a>

```csharp
private void ResetStorageProfileId()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.resetVpcConfiguration"></a>

```csharp
private void ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities">InstanceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration">PersistentVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfigurationInput">AutoScalingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilitiesInput">InstanceCapabilitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptionsInput">InstanceMarketOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfigurationInput">PersistentVolumeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileIdInput">StorageProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId">StorageProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingConfiguration`<sup>Required</sup> <a name="AutoScalingConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfiguration"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference AutoScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfigurationOutputReference</a>

---

##### `InstanceCapabilities`<sup>Required</sup> <a name="InstanceCapabilities" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilities"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference InstanceCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilitiesOutputReference</a>

---

##### `InstanceMarketOptions`<sup>Required</sup> <a name="InstanceMarketOptions" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptions"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference InstanceMarketOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptionsOutputReference</a>

---

##### `PersistentVolumeConfiguration`<sup>Required</sup> <a name="PersistentVolumeConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfiguration"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference PersistentVolumeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfiguration"></a>

```csharp
public DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference">DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference</a>

---

##### `AutoScalingConfigurationInput`<sup>Optional</sup> <a name="AutoScalingConfigurationInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.autoScalingConfigurationInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration AutoScalingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration">DeadlineFleetConfigurationServiceManagedEc2AutoScalingConfiguration</a>

---

##### `InstanceCapabilitiesInput`<sup>Optional</sup> <a name="InstanceCapabilitiesInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceCapabilitiesInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities InstanceCapabilitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities">DeadlineFleetConfigurationServiceManagedEc2InstanceCapabilities</a>

---

##### `InstanceMarketOptionsInput`<sup>Optional</sup> <a name="InstanceMarketOptionsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.instanceMarketOptionsInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions InstanceMarketOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions">DeadlineFleetConfigurationServiceManagedEc2InstanceMarketOptions</a>

---

##### `PersistentVolumeConfigurationInput`<sup>Optional</sup> <a name="PersistentVolumeConfigurationInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.persistentVolumeConfigurationInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration PersistentVolumeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---

##### `StorageProfileIdInput`<sup>Optional</sup> <a name="StorageProfileIdInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileIdInput"></a>

```csharp
public string StorageProfileIdInput { get; }
```

- *Type:* string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.vpcConfigurationInput"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration VpcConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---

##### `StorageProfileId`<sup>Required</sup> <a name="StorageProfileId" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.storageProfileId"></a>

```csharp
public string StorageProfileId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2OutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2">DeadlineFleetConfigurationServiceManagedEc2</a>

---


### DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetLastUsedTtlHours">ResetLastUsedTtlHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetSizeGiB">ResetSizeGiB</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetThroughputMiB">ResetThroughputMiB</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetLastUsedTtlHours` <a name="ResetLastUsedTtlHours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetLastUsedTtlHours"></a>

```csharp
private void ResetLastUsedTtlHours()
```

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetMountPath"></a>

```csharp
private void ResetMountPath()
```

##### `ResetSizeGiB` <a name="ResetSizeGiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetSizeGiB"></a>

```csharp
private void ResetSizeGiB()
```

##### `ResetThroughputMiB` <a name="ResetThroughputMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.resetThroughputMiB"></a>

```csharp
private void ResetThroughputMiB()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHoursInput">LastUsedTtlHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiBInput">SizeGiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiBInput">ThroughputMiBInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours">LastUsedTtlHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB">SizeGiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB">ThroughputMiB</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `LastUsedTtlHoursInput`<sup>Optional</sup> <a name="LastUsedTtlHoursInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHoursInput"></a>

```csharp
public double LastUsedTtlHoursInput { get; }
```

- *Type:* double

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPathInput"></a>

```csharp
public string MountPathInput { get; }
```

- *Type:* string

---

##### `SizeGiBInput`<sup>Optional</sup> <a name="SizeGiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiBInput"></a>

```csharp
public double SizeGiBInput { get; }
```

- *Type:* double

---

##### `ThroughputMiBInput`<sup>Optional</sup> <a name="ThroughputMiBInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiBInput"></a>

```csharp
public double ThroughputMiBInput { get; }
```

- *Type:* double

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `LastUsedTtlHours`<sup>Required</sup> <a name="LastUsedTtlHours" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.lastUsedTtlHours"></a>

```csharp
public double LastUsedTtlHours { get; }
```

- *Type:* double

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `SizeGiB`<sup>Required</sup> <a name="SizeGiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.sizeGiB"></a>

```csharp
public double SizeGiB { get; }
```

- *Type:* double

---

##### `ThroughputMiB`<sup>Required</sup> <a name="ThroughputMiB" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.throughputMiB"></a>

```csharp
public double ThroughputMiB { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration">DeadlineFleetConfigurationServiceManagedEc2PersistentVolumeConfiguration</a>

---


### DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference <a name="DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resetResourceConfigurationArns">ResetResourceConfigurationArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationArns` <a name="ResetResourceConfigurationArns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.resetResourceConfigurationArns"></a>

```csharp
private void ResetResourceConfigurationArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArnsInput">ResourceConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns">ResourceConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArnsInput`<sup>Optional</sup> <a name="ResourceConfigurationArnsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArnsInput"></a>

```csharp
public string[] ResourceConfigurationArnsInput { get; }
```

- *Type:* string[]

---

##### `ResourceConfigurationArns`<sup>Required</sup> <a name="ResourceConfigurationArns" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.resourceConfigurationArns"></a>

```csharp
public string[] ResourceConfigurationArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration">DeadlineFleetConfigurationServiceManagedEc2VpcConfiguration</a>

---


### DeadlineFleetHostConfigurationOutputReference <a name="DeadlineFleetHostConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetHostConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptBody">ResetScriptBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptTimeoutSeconds">ResetScriptTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScriptBody` <a name="ResetScriptBody" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptBody"></a>

```csharp
private void ResetScriptBody()
```

##### `ResetScriptTimeoutSeconds` <a name="ResetScriptTimeoutSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.resetScriptTimeoutSeconds"></a>

```csharp
private void ResetScriptTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBodyInput">ScriptBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSecondsInput">ScriptTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBody">ScriptBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds">ScriptTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptBodyInput`<sup>Optional</sup> <a name="ScriptBodyInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBodyInput"></a>

```csharp
public string ScriptBodyInput { get; }
```

- *Type:* string

---

##### `ScriptTimeoutSecondsInput`<sup>Optional</sup> <a name="ScriptTimeoutSecondsInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSecondsInput"></a>

```csharp
public double ScriptTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ScriptBody`<sup>Required</sup> <a name="ScriptBody" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptBody"></a>

```csharp
public string ScriptBody { get; }
```

- *Type:* string

---

##### `ScriptTimeoutSeconds`<sup>Required</sup> <a name="ScriptTimeoutSeconds" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.scriptTimeoutSeconds"></a>

```csharp
public double ScriptTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetHostConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetHostConfiguration">DeadlineFleetHostConfiguration</a>

---


### DeadlineFleetTagsList <a name="DeadlineFleetTagsList" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.get"></a>

```csharp
private DeadlineFleetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsList.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>[]

---


### DeadlineFleetTagsOutputReference <a name="DeadlineFleetTagsOutputReference" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DeadlineFleetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DeadlineFleetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.deadlineFleet.DeadlineFleetTags">DeadlineFleetTags</a>

---



