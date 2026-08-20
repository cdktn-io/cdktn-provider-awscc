# `braketSpendingLimit` Submodule <a name="`braketSpendingLimit` Submodule" id="@cdktn/provider-awscc.braketSpendingLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BraketSpendingLimit <a name="BraketSpendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit awscc_braket_spending_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimit(Construct Scope, string Id, BraketSpendingLimitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig">BraketSpendingLimitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig">BraketSpendingLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTimePeriod">ResetTimePeriod</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags"></a>

```csharp
private void PutTags(IResolvable|BraketSpendingLimitTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod"></a>

```csharp
private void PutTimePeriod(BraketSpendingLimitTimePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimePeriod` <a name="ResetTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.resetTimePeriod"></a>

```csharp
private void ResetTimePeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BraketSpendingLimit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BraketSpendingLimit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BraketSpendingLimit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BraketSpendingLimit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BraketSpendingLimit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BraketSpendingLimit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BraketSpendingLimit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BraketSpendingLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BraketSpendingLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.queuedSpend">QueuedSpend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitArn">SpendingLimitArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList">BraketSpendingLimitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference">BraketSpendingLimitTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.totalSpend">TotalSpend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArnInput">DeviceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitInput">SpendingLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriodInput">TimePeriodInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArn">DeviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimit">SpendingLimit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QueuedSpend`<sup>Required</sup> <a name="QueuedSpend" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.queuedSpend"></a>

```csharp
public string QueuedSpend { get; }
```

- *Type:* string

---

##### `SpendingLimitArn`<sup>Required</sup> <a name="SpendingLimitArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitArn"></a>

```csharp
public string SpendingLimitArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tags"></a>

```csharp
public BraketSpendingLimitTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList">BraketSpendingLimitTagsList</a>

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriod"></a>

```csharp
public BraketSpendingLimitTimePeriodOutputReference TimePeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference">BraketSpendingLimitTimePeriodOutputReference</a>

---

##### `TotalSpend`<sup>Required</sup> <a name="TotalSpend" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.totalSpend"></a>

```csharp
public string TotalSpend { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DeviceArnInput`<sup>Optional</sup> <a name="DeviceArnInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArnInput"></a>

```csharp
public string DeviceArnInput { get; }
```

- *Type:* string

---

##### `SpendingLimitInput`<sup>Optional</sup> <a name="SpendingLimitInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimitInput"></a>

```csharp
public string SpendingLimitInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tagsInput"></a>

```csharp
public IResolvable|BraketSpendingLimitTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.timePeriodInput"></a>

```csharp
public IResolvable|BraketSpendingLimitTimePeriod TimePeriodInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---

##### `DeviceArn`<sup>Required</sup> <a name="DeviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.deviceArn"></a>

```csharp
public string DeviceArn { get; }
```

- *Type:* string

---

##### `SpendingLimit`<sup>Required</sup> <a name="SpendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.spendingLimit"></a>

```csharp
public string SpendingLimit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BraketSpendingLimitConfig <a name="BraketSpendingLimitConfig" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeviceArn,
    string SpendingLimit,
    IResolvable|BraketSpendingLimitTags[] Tags = null,
    BraketSpendingLimitTimePeriod TimePeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.deviceArn">DeviceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.spendingLimit">SpendingLimit</a></code> | <code>string</code> | The maximum amount that can be spent on the specified device, in USD. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]</code> | The tags to apply to the spending limit. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | Defines a time range for spending limits, specifying when the limit is active. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeviceArn`<sup>Required</sup> <a name="DeviceArn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.deviceArn"></a>

```csharp
public string DeviceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#device_arn BraketSpendingLimit#device_arn}

---

##### `SpendingLimit`<sup>Required</sup> <a name="SpendingLimit" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.spendingLimit"></a>

```csharp
public string SpendingLimit { get; set; }
```

- *Type:* string

The maximum amount that can be spent on the specified device, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#spending_limit BraketSpendingLimit#spending_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.tags"></a>

```csharp
public IResolvable|BraketSpendingLimitTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

The tags to apply to the spending limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#tags BraketSpendingLimit#tags}

---

##### `TimePeriod`<sup>Optional</sup> <a name="TimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitConfig.property.timePeriod"></a>

```csharp
public BraketSpendingLimitTimePeriod TimePeriod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

Defines a time range for spending limits, specifying when the limit is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#time_period BraketSpendingLimit#time_period}

---

### BraketSpendingLimitTags <a name="BraketSpendingLimitTags" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimitTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#key BraketSpendingLimit#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#value BraketSpendingLimit#value}

---

### BraketSpendingLimitTimePeriod <a name="BraketSpendingLimitTimePeriod" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimitTimePeriod {
    string EndAt = null,
    string StartAt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.endAt">EndAt</a></code> | <code>string</code> | The end date and time for the spending limit period, in ISO 8601 format. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.startAt">StartAt</a></code> | <code>string</code> | The start date and time for the spending limit period, in ISO 8601 format. |

---

##### `EndAt`<sup>Optional</sup> <a name="EndAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.endAt"></a>

```csharp
public string EndAt { get; set; }
```

- *Type:* string

The end date and time for the spending limit period, in ISO 8601 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#end_at BraketSpendingLimit#end_at}

---

##### `StartAt`<sup>Optional</sup> <a name="StartAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod.property.startAt"></a>

```csharp
public string StartAt { get; set; }
```

- *Type:* string

The start date and time for the spending limit period, in ISO 8601 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/braket_spending_limit#start_at BraketSpendingLimit#start_at}

---

## Classes <a name="Classes" id="Classes"></a>

### BraketSpendingLimitTagsList <a name="BraketSpendingLimitTagsList" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimitTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get"></a>

```csharp
private BraketSpendingLimitTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsList.property.internalValue"></a>

```csharp
public IResolvable|BraketSpendingLimitTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>[]

---


### BraketSpendingLimitTagsOutputReference <a name="BraketSpendingLimitTagsOutputReference" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimitTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BraketSpendingLimitTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTags">BraketSpendingLimitTags</a>

---


### BraketSpendingLimitTimePeriodOutputReference <a name="BraketSpendingLimitTimePeriodOutputReference" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BraketSpendingLimitTimePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetEndAt">ResetEndAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetStartAt">ResetStartAt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndAt` <a name="ResetEndAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetEndAt"></a>

```csharp
private void ResetEndAt()
```

##### `ResetStartAt` <a name="ResetStartAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.resetStartAt"></a>

```csharp
private void ResetStartAt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAtInput">EndAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAtInput">StartAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAt">EndAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAt">StartAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndAtInput`<sup>Optional</sup> <a name="EndAtInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAtInput"></a>

```csharp
public string EndAtInput { get; }
```

- *Type:* string

---

##### `StartAtInput`<sup>Optional</sup> <a name="StartAtInput" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAtInput"></a>

```csharp
public string StartAtInput { get; }
```

- *Type:* string

---

##### `EndAt`<sup>Required</sup> <a name="EndAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.endAt"></a>

```csharp
public string EndAt { get; }
```

- *Type:* string

---

##### `StartAt`<sup>Required</sup> <a name="StartAt" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.startAt"></a>

```csharp
public string StartAt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriodOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BraketSpendingLimitTimePeriod InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.braketSpendingLimit.BraketSpendingLimitTimePeriod">BraketSpendingLimitTimePeriod</a>

---



