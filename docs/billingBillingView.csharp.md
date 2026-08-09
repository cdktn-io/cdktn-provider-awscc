# `billingBillingView` Submodule <a name="`billingBillingView` Submodule" id="@cdktn/provider-awscc.billingBillingView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingBillingView <a name="BillingBillingView" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view awscc_billing_billing_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingView(Construct Scope, string Id, BillingBillingViewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig">BillingBillingViewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig">BillingBillingViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression">PutDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDataFilterExpression">ResetDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataFilterExpression` <a name="PutDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression"></a>

```csharp
private void PutDataFilterExpression(BillingBillingViewDataFilterExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putDataFilterExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags"></a>

```csharp
private void PutTags(IResolvable|BillingBillingViewTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]

---

##### `ResetDataFilterExpression` <a name="ResetDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDataFilterExpression"></a>

```csharp
private void ResetDataFilterExpression()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingBillingView resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingBillingView.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingBillingView.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingBillingView.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingBillingView.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BillingBillingView resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingBillingView to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingBillingView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BillingBillingView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.billingViewType">BillingViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpression">DataFilterExpression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference">BillingBillingViewDataFilterExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList">BillingBillingViewTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpressionInput">DataFilterExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViewsInput">SourceViewsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViews">SourceViews</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BillingViewType`<sup>Required</sup> <a name="BillingViewType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.billingViewType"></a>

```csharp
public string BillingViewType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `DataFilterExpression`<sup>Required</sup> <a name="DataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpression"></a>

```csharp
public BillingBillingViewDataFilterExpressionOutputReference DataFilterExpression { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference">BillingBillingViewDataFilterExpressionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tags"></a>

```csharp
public BillingBillingViewTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList">BillingBillingViewTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `DataFilterExpressionInput`<sup>Optional</sup> <a name="DataFilterExpressionInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.dataFilterExpressionInput"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpression DataFilterExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceViewsInput`<sup>Optional</sup> <a name="SourceViewsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViewsInput"></a>

```csharp
public string[] SourceViewsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tagsInput"></a>

```csharp
public IResolvable|BillingBillingViewTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceViews`<sup>Required</sup> <a name="SourceViews" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.sourceViews"></a>

```csharp
public string[] SourceViews { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingBillingView.BillingBillingView.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingBillingViewConfig <a name="BillingBillingViewConfig" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] SourceViews,
    BillingBillingViewDataFilterExpression DataFilterExpression = null,
    string Description = null,
    IResolvable|BillingBillingViewTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#name BillingBillingView#name}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.sourceViews">SourceViews</a></code> | <code>string[]</code> | An array of strings that define the billing view's source. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dataFilterExpression">DataFilterExpression</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#description BillingBillingView#description}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]</code> | An array of key-value pairs associated to the billing view being created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#name BillingBillingView#name}.

---

##### `SourceViews`<sup>Required</sup> <a name="SourceViews" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.sourceViews"></a>

```csharp
public string[] SourceViews { get; set; }
```

- *Type:* string[]

An array of strings that define the billing view's source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#source_views BillingBillingView#source_views}

---

##### `DataFilterExpression`<sup>Optional</sup> <a name="DataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.dataFilterExpression"></a>

```csharp
public BillingBillingViewDataFilterExpression DataFilterExpression { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#data_filter_expression BillingBillingView#data_filter_expression}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#description BillingBillingView#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewConfig.property.tags"></a>

```csharp
public IResolvable|BillingBillingViewTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]

An array of key-value pairs associated to the billing view being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}

---

### BillingBillingViewDataFilterExpression <a name="BillingBillingViewDataFilterExpression" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpression {
    BillingBillingViewDataFilterExpressionDimensions Dimensions = null,
    BillingBillingViewDataFilterExpressionTags Tags = null,
    BillingBillingViewDataFilterExpressionTimeRange TimeRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.timeRange">TimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.dimensions"></a>

```csharp
public BillingBillingViewDataFilterExpressionDimensions Dimensions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#dimensions BillingBillingView#dimensions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.tags"></a>

```csharp
public BillingBillingViewDataFilterExpressionTags Tags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#tags BillingBillingView#tags}.

---

##### `TimeRange`<sup>Optional</sup> <a name="TimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression.property.timeRange"></a>

```csharp
public BillingBillingViewDataFilterExpressionTimeRange TimeRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#time_range BillingBillingView#time_range}.

---

### BillingBillingViewDataFilterExpressionDimensions <a name="BillingBillingViewDataFilterExpressionDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionDimensions {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#key BillingBillingView#key}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#values BillingBillingView#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

### BillingBillingViewDataFilterExpressionTags <a name="BillingBillingViewDataFilterExpressionTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionTags {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#key BillingBillingView#key}. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#values BillingBillingView#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#key BillingBillingView#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#values BillingBillingView#values}.

---

### BillingBillingViewDataFilterExpressionTimeRange <a name="BillingBillingViewDataFilterExpressionTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionTimeRange {
    string BeginDateInclusive = null,
    string EndDateInclusive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.beginDateInclusive">BeginDateInclusive</a></code> | <code>string</code> | The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.endDateInclusive">EndDateInclusive</a></code> | <code>string</code> | The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ). |

---

##### `BeginDateInclusive`<sup>Optional</sup> <a name="BeginDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.beginDateInclusive"></a>

```csharp
public string BeginDateInclusive { get; set; }
```

- *Type:* string

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#begin_date_inclusive BillingBillingView#begin_date_inclusive}

---

##### `EndDateInclusive`<sup>Optional</sup> <a name="EndDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange.property.endDateInclusive"></a>

```csharp
public string EndDateInclusive { get; set; }
```

- *Type:* string

The time in ISO 8601 format, UTC time (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#end_date_inclusive BillingBillingView#end_date_inclusive}

---

### BillingBillingViewTags <a name="BillingBillingViewTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#key BillingBillingView#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billing_billing_view#value BillingBillingView#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BillingBillingViewDataFilterExpressionDimensionsOutputReference <a name="BillingBillingViewDataFilterExpressionDimensionsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpressionDimensions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

---


### BillingBillingViewDataFilterExpressionOutputReference <a name="BillingBillingViewDataFilterExpressionOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange">PutTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTimeRange">ResetTimeRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(BillingBillingViewDataFilterExpressionDimensions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putDimensions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags"></a>

```csharp
private void PutTags(BillingBillingViewDataFilterExpressionTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

---

##### `PutTimeRange` <a name="PutTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange"></a>

```csharp
private void PutTimeRange(BillingBillingViewDataFilterExpressionTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.putTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeRange` <a name="ResetTimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.resetTimeRange"></a>

```csharp
private void ResetTimeRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference">BillingBillingViewDataFilterExpressionDimensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference">BillingBillingViewDataFilterExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRange">TimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference">BillingBillingViewDataFilterExpressionTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRangeInput">TimeRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensions"></a>

```csharp
public BillingBillingViewDataFilterExpressionDimensionsOutputReference Dimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensionsOutputReference">BillingBillingViewDataFilterExpressionDimensionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tags"></a>

```csharp
public BillingBillingViewDataFilterExpressionTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference">BillingBillingViewDataFilterExpressionTagsOutputReference</a>

---

##### `TimeRange`<sup>Required</sup> <a name="TimeRange" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRange"></a>

```csharp
public BillingBillingViewDataFilterExpressionTimeRangeOutputReference TimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference">BillingBillingViewDataFilterExpressionTimeRangeOutputReference</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.dimensionsInput"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpressionDimensions DimensionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionDimensions">BillingBillingViewDataFilterExpressionDimensions</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpressionTags TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

---

##### `TimeRangeInput`<sup>Optional</sup> <a name="TimeRangeInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.timeRangeInput"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpressionTimeRange TimeRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpression">BillingBillingViewDataFilterExpression</a>

---


### BillingBillingViewDataFilterExpressionTagsOutputReference <a name="BillingBillingViewDataFilterExpressionTagsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpressionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTags">BillingBillingViewDataFilterExpressionTags</a>

---


### BillingBillingViewDataFilterExpressionTimeRangeOutputReference <a name="BillingBillingViewDataFilterExpressionTimeRangeOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewDataFilterExpressionTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetBeginDateInclusive">ResetBeginDateInclusive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetEndDateInclusive">ResetEndDateInclusive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBeginDateInclusive` <a name="ResetBeginDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetBeginDateInclusive"></a>

```csharp
private void ResetBeginDateInclusive()
```

##### `ResetEndDateInclusive` <a name="ResetEndDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.resetEndDateInclusive"></a>

```csharp
private void ResetEndDateInclusive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput">BeginDateInclusiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput">EndDateInclusiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive">BeginDateInclusive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive">EndDateInclusive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BeginDateInclusiveInput`<sup>Optional</sup> <a name="BeginDateInclusiveInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusiveInput"></a>

```csharp
public string BeginDateInclusiveInput { get; }
```

- *Type:* string

---

##### `EndDateInclusiveInput`<sup>Optional</sup> <a name="EndDateInclusiveInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusiveInput"></a>

```csharp
public string EndDateInclusiveInput { get; }
```

- *Type:* string

---

##### `BeginDateInclusive`<sup>Required</sup> <a name="BeginDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.beginDateInclusive"></a>

```csharp
public string BeginDateInclusive { get; }
```

- *Type:* string

---

##### `EndDateInclusive`<sup>Required</sup> <a name="EndDateInclusive" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.endDateInclusive"></a>

```csharp
public string EndDateInclusive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingBillingViewDataFilterExpressionTimeRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewDataFilterExpressionTimeRange">BillingBillingViewDataFilterExpressionTimeRange</a>

---


### BillingBillingViewTagsList <a name="BillingBillingViewTagsList" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get"></a>

```csharp
private BillingBillingViewTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsList.property.internalValue"></a>

```csharp
public IResolvable|BillingBillingViewTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>[]

---


### BillingBillingViewTagsOutputReference <a name="BillingBillingViewTagsOutputReference" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingBillingViewTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingBillingView.BillingBillingViewTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingBillingViewTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingBillingView.BillingBillingViewTags">BillingBillingViewTags</a>

---



