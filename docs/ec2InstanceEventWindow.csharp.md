# `ec2InstanceEventWindow` Submodule <a name="`ec2InstanceEventWindow` Submodule" id="@cdktn/provider-awscc.ec2InstanceEventWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceEventWindow <a name="Ec2InstanceEventWindow" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindow(Construct Scope, string Id, Ec2InstanceEventWindowConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig">Ec2InstanceEventWindowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig">Ec2InstanceEventWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges">PutTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression">ResetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges">ResetTimeRanges</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2InstanceEventWindowTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

---

##### `PutTimeRanges` <a name="PutTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges"></a>

```csharp
private void PutTimeRanges(IResolvable|Ec2InstanceEventWindowTimeRanges[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

---

##### `ResetCronExpression` <a name="ResetCronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression"></a>

```csharp
private void ResetCronExpression()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeRanges` <a name="ResetTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges"></a>

```csharp
private void ResetTimeRanges()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2InstanceEventWindow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2InstanceEventWindow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2InstanceEventWindow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2InstanceEventWindow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2InstanceEventWindow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2InstanceEventWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2InstanceEventWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId">InstanceEventWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges">TimeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput">TimeRangesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceEventWindowId`<sup>Required</sup> <a name="InstanceEventWindowId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId"></a>

```csharp
public string InstanceEventWindowId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags"></a>

```csharp
public Ec2InstanceEventWindowTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a>

---

##### `TimeRanges`<sup>Required</sup> <a name="TimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges"></a>

```csharp
public Ec2InstanceEventWindowTimeRangesList TimeRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a>

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

---

##### `TimeRangesInput`<sup>Optional</sup> <a name="TimeRangesInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTimeRanges[] TimeRangesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceEventWindowConfig <a name="Ec2InstanceEventWindowConfig" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CronExpression = null,
    string Name = null,
    IResolvable|Ec2InstanceEventWindowTags[] Tags = null,
    IResolvable|Ec2InstanceEventWindowTimeRanges[] TimeRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression">CronExpression</a></code> | <code>string</code> | The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name">Name</a></code> | <code>string</code> | The name of the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]</code> | The tags applied to the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges">TimeRanges</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]</code> | The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CronExpression`<sup>Optional</sup> <a name="CronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

The tags applied to the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}

---

##### `TimeRanges`<sup>Optional</sup> <a name="TimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTimeRanges[] TimeRanges { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}

---

### Ec2InstanceEventWindowTags <a name="Ec2InstanceEventWindowTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#key Ec2InstanceEventWindow#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#value Ec2InstanceEventWindow#value}

---

### Ec2InstanceEventWindowTimeRanges <a name="Ec2InstanceEventWindowTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowTimeRanges {
    double EndHour = null,
    string EndWeekDay = null,
    double StartHour = null,
    string StartWeekDay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour">EndHour</a></code> | <code>double</code> | The hour when the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay">EndWeekDay</a></code> | <code>string</code> | The day on which the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour">StartHour</a></code> | <code>double</code> | The hour when the time range begins. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay">StartWeekDay</a></code> | <code>string</code> | The day on which the time range begins. |

---

##### `EndHour`<sup>Optional</sup> <a name="EndHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour"></a>

```csharp
public double EndHour { get; set; }
```

- *Type:* double

The hour when the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_hour Ec2InstanceEventWindow#end_hour}

---

##### `EndWeekDay`<sup>Optional</sup> <a name="EndWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay"></a>

```csharp
public string EndWeekDay { get; set; }
```

- *Type:* string

The day on which the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_week_day Ec2InstanceEventWindow#end_week_day}

---

##### `StartHour`<sup>Optional</sup> <a name="StartHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour"></a>

```csharp
public double StartHour { get; set; }
```

- *Type:* double

The hour when the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_hour Ec2InstanceEventWindow#start_hour}

---

##### `StartWeekDay`<sup>Optional</sup> <a name="StartWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay"></a>

```csharp
public string StartWeekDay { get; set; }
```

- *Type:* string

The day on which the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_week_day Ec2InstanceEventWindow#start_week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceEventWindowTagsList <a name="Ec2InstanceEventWindowTagsList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get"></a>

```csharp
private Ec2InstanceEventWindowTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>[]

---


### Ec2InstanceEventWindowTagsOutputReference <a name="Ec2InstanceEventWindowTagsOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>

---


### Ec2InstanceEventWindowTimeRangesList <a name="Ec2InstanceEventWindowTimeRangesList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowTimeRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get"></a>

```csharp
private Ec2InstanceEventWindowTimeRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTimeRanges[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>[]

---


### Ec2InstanceEventWindowTimeRangesOutputReference <a name="Ec2InstanceEventWindowTimeRangesOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2InstanceEventWindowTimeRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour">ResetEndHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay">ResetEndWeekDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour">ResetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay">ResetStartWeekDay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndHour` <a name="ResetEndHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour"></a>

```csharp
private void ResetEndHour()
```

##### `ResetEndWeekDay` <a name="ResetEndWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay"></a>

```csharp
private void ResetEndWeekDay()
```

##### `ResetStartHour` <a name="ResetStartHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour"></a>

```csharp
private void ResetStartHour()
```

##### `ResetStartWeekDay` <a name="ResetStartWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay"></a>

```csharp
private void ResetStartWeekDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput">EndHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput">EndWeekDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput">StartHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput">StartWeekDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour">EndHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay">EndWeekDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour">StartHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay">StartWeekDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndHourInput`<sup>Optional</sup> <a name="EndHourInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput"></a>

```csharp
public double EndHourInput { get; }
```

- *Type:* double

---

##### `EndWeekDayInput`<sup>Optional</sup> <a name="EndWeekDayInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput"></a>

```csharp
public string EndWeekDayInput { get; }
```

- *Type:* string

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput"></a>

```csharp
public double StartHourInput { get; }
```

- *Type:* double

---

##### `StartWeekDayInput`<sup>Optional</sup> <a name="StartWeekDayInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput"></a>

```csharp
public string StartWeekDayInput { get; }
```

- *Type:* string

---

##### `EndHour`<sup>Required</sup> <a name="EndHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour"></a>

```csharp
public double EndHour { get; }
```

- *Type:* double

---

##### `EndWeekDay`<sup>Required</sup> <a name="EndWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay"></a>

```csharp
public string EndWeekDay { get; }
```

- *Type:* string

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour"></a>

```csharp
public double StartHour { get; }
```

- *Type:* double

---

##### `StartWeekDay`<sup>Required</sup> <a name="StartWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay"></a>

```csharp
public string StartWeekDay { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2InstanceEventWindowTimeRanges InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>

---



