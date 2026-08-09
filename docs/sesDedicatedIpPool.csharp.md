# `sesDedicatedIpPool` Submodule <a name="`sesDedicatedIpPool` Submodule" id="@cdktn/provider-awscc.sesDedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesDedicatedIpPool <a name="SesDedicatedIpPool" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool awscc_ses_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesDedicatedIpPool(Construct Scope, string Id, SesDedicatedIpPoolConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig">SesDedicatedIpPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig">SesDedicatedIpPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetPoolName">ResetPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetScalingMode">ResetScalingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.putTags"></a>

```csharp
private void PutTags(IResolvable|SesDedicatedIpPoolTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]

---

##### `ResetPoolName` <a name="ResetPoolName" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetPoolName"></a>

```csharp
private void ResetPoolName()
```

##### `ResetScalingMode` <a name="ResetScalingMode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetScalingMode"></a>

```csharp
private void ResetScalingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesDedicatedIpPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesDedicatedIpPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesDedicatedIpPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesDedicatedIpPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SesDedicatedIpPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SesDedicatedIpPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesDedicatedIpPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesDedicatedIpPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SesDedicatedIpPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList">SesDedicatedIpPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolNameInput">PoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingModeInput">ScalingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingMode">ScalingMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tags"></a>

```csharp
public SesDedicatedIpPoolTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList">SesDedicatedIpPoolTagsList</a>

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolNameInput"></a>

```csharp
public string PoolNameInput { get; }
```

- *Type:* string

---

##### `ScalingModeInput`<sup>Optional</sup> <a name="ScalingModeInput" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingModeInput"></a>

```csharp
public string ScalingModeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tagsInput"></a>

```csharp
public IResolvable|SesDedicatedIpPoolTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

##### `ScalingMode`<sup>Required</sup> <a name="ScalingMode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingMode"></a>

```csharp
public string ScalingMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesDedicatedIpPoolConfig <a name="SesDedicatedIpPoolConfig" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesDedicatedIpPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PoolName = null,
    string ScalingMode = null,
    IResolvable|SesDedicatedIpPoolTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.poolName">PoolName</a></code> | <code>string</code> | The name of the dedicated IP pool. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.scalingMode">ScalingMode</a></code> | <code>string</code> | Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]</code> | The tags (keys and values) associated with the dedicated IP pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PoolName`<sup>Optional</sup> <a name="PoolName" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.poolName"></a>

```csharp
public string PoolName { get; set; }
```

- *Type:* string

The name of the dedicated IP pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#pool_name SesDedicatedIpPool#pool_name}

---

##### `ScalingMode`<sup>Optional</sup> <a name="ScalingMode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.scalingMode"></a>

```csharp
public string ScalingMode { get; set; }
```

- *Type:* string

Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#scaling_mode SesDedicatedIpPool#scaling_mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.tags"></a>

```csharp
public IResolvable|SesDedicatedIpPoolTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]

The tags (keys and values) associated with the dedicated IP pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#tags SesDedicatedIpPool#tags}

---

### SesDedicatedIpPoolTags <a name="SesDedicatedIpPoolTags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesDedicatedIpPoolTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#key SesDedicatedIpPool#key}. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#value SesDedicatedIpPool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#key SesDedicatedIpPool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#value SesDedicatedIpPool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesDedicatedIpPoolTagsList <a name="SesDedicatedIpPoolTagsList" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesDedicatedIpPoolTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.get"></a>

```csharp
private SesDedicatedIpPoolTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.internalValue"></a>

```csharp
public IResolvable|SesDedicatedIpPoolTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>[]

---


### SesDedicatedIpPoolTagsOutputReference <a name="SesDedicatedIpPoolTagsOutputReference" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SesDedicatedIpPoolTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesDedicatedIpPoolTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>

---



