# `ceAnomalySubscription` Submodule <a name="`ceAnomalySubscription` Submodule" id="@cdktn/provider-awscc.ceAnomalySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalySubscription <a name="CeAnomalySubscription" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription awscc_ce_anomaly_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscription(Construct Scope, string Id, CeAnomalySubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig">CeAnomalySubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig">CeAnomalySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putSubscribers">PutSubscribers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression">ResetThresholdExpression</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putResourceTags"></a>

```csharp
private void PutResourceTags(IResolvable|CeAnomalySubscriptionResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]

---

##### `PutSubscribers` <a name="PutSubscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putSubscribers"></a>

```csharp
private void PutSubscribers(IResolvable|CeAnomalySubscriptionSubscribers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.putSubscribers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]

---

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

##### `ResetThresholdExpression` <a name="ResetThresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression"></a>

```csharp
private void ResetThresholdExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CeAnomalySubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalySubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalySubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalySubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CeAnomalySubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CeAnomalySubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CeAnomalySubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CeAnomalySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CeAnomalySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList">CeAnomalySubscriptionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribers">Subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList">CeAnomalySubscriptionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionArn">SubscriptionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput">MonitorArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribersInput">SubscribersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionNameInput">SubscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput">ThresholdExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList">MonitorArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression">ThresholdExpression</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTags"></a>

```csharp
public CeAnomalySubscriptionResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList">CeAnomalySubscriptionResourceTagsList</a>

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribers"></a>

```csharp
public CeAnomalySubscriptionSubscribersList Subscribers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList">CeAnomalySubscriptionSubscribersList</a>

---

##### `SubscriptionArn`<sup>Required</sup> <a name="SubscriptionArn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionArn"></a>

```csharp
public string SubscriptionArn { get; }
```

- *Type:* string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `MonitorArnListInput`<sup>Optional</sup> <a name="MonitorArnListInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput"></a>

```csharp
public string[] MonitorArnListInput { get; }
```

- *Type:* string[]

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.resourceTagsInput"></a>

```csharp
public IResolvable|CeAnomalySubscriptionResourceTags[] ResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]

---

##### `SubscribersInput`<sup>Optional</sup> <a name="SubscribersInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscribersInput"></a>

```csharp
public IResolvable|CeAnomalySubscriptionSubscribers[] SubscribersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]

---

##### `SubscriptionNameInput`<sup>Optional</sup> <a name="SubscriptionNameInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionNameInput"></a>

```csharp
public string SubscriptionNameInput { get; }
```

- *Type:* string

---

##### `ThresholdExpressionInput`<sup>Optional</sup> <a name="ThresholdExpressionInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput"></a>

```csharp
public string ThresholdExpressionInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `MonitorArnList`<sup>Required</sup> <a name="MonitorArnList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList"></a>

```csharp
public string[] MonitorArnList { get; }
```

- *Type:* string[]

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdExpression`<sup>Required</sup> <a name="ThresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression"></a>

```csharp
public string ThresholdExpression { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalySubscriptionConfig <a name="CeAnomalySubscriptionConfig" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Frequency,
    string[] MonitorArnList,
    IResolvable|CeAnomalySubscriptionSubscribers[] Subscribers,
    string SubscriptionName,
    IResolvable|CeAnomalySubscriptionResourceTags[] ResourceTags = null,
    double Threshold = null,
    string ThresholdExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency">Frequency</a></code> | <code>string</code> | The frequency at which anomaly reports are sent over email. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList">MonitorArnList</a></code> | <code>string[]</code> | A list of cost anomaly monitors. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscribers">Subscribers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]</code> | A list of subscriber. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | The name of the subscription. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.resourceTags">ResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]</code> | Tags to assign to subscription. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold">Threshold</a></code> | <code>double</code> | The dollar value that triggers a notification if the threshold is exceeded. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression">ThresholdExpression</a></code> | <code>string</code> | An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

The frequency at which anomaly reports are sent over email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}

---

##### `MonitorArnList`<sup>Required</sup> <a name="MonitorArnList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList"></a>

```csharp
public string[] MonitorArnList { get; set; }
```

- *Type:* string[]

A list of cost anomaly monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscribers"></a>

```csharp
public IResolvable|CeAnomalySubscriptionSubscribers[] Subscribers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]

A list of subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#subscribers CeAnomalySubscription#subscribers}

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; set; }
```

- *Type:* string

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#subscription_name CeAnomalySubscription#subscription_name}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.resourceTags"></a>

```csharp
public IResolvable|CeAnomalySubscriptionResourceTags[] ResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]

Tags to assign to subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#resource_tags CeAnomalySubscription#resource_tags}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The dollar value that triggers a notification if the threshold is exceeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}

---

##### `ThresholdExpression`<sup>Optional</sup> <a name="ThresholdExpression" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression"></a>

```csharp
public string ThresholdExpression { get; set; }
```

- *Type:* string

An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

### CeAnomalySubscriptionResourceTags <a name="CeAnomalySubscriptionResourceTags" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionResourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.key">Key</a></code> | <code>string</code> | The key name for the tag. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#value CeAnomalySubscription#value}

---

### CeAnomalySubscriptionSubscribers <a name="CeAnomalySubscriptionSubscribers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionSubscribers {
    string Address,
    string Type,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#address CeAnomalySubscription#address}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#type CeAnomalySubscription#type}. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#status CeAnomalySubscription#status}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#address CeAnomalySubscription#address}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#type CeAnomalySubscription#type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ce_anomaly_subscription#status CeAnomalySubscription#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalySubscriptionResourceTagsList <a name="CeAnomalySubscriptionResourceTagsList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.get"></a>

```csharp
private CeAnomalySubscriptionResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|CeAnomalySubscriptionResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>[]

---


### CeAnomalySubscriptionResourceTagsOutputReference <a name="CeAnomalySubscriptionResourceTagsOutputReference" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CeAnomalySubscriptionResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionResourceTags">CeAnomalySubscriptionResourceTags</a>

---


### CeAnomalySubscriptionSubscribersList <a name="CeAnomalySubscriptionSubscribersList" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionSubscribersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.get"></a>

```csharp
private CeAnomalySubscriptionSubscribersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersList.property.internalValue"></a>

```csharp
public IResolvable|CeAnomalySubscriptionSubscribers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>[]

---


### CeAnomalySubscriptionSubscribersOutputReference <a name="CeAnomalySubscriptionSubscribersOutputReference" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CeAnomalySubscriptionSubscribersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CeAnomalySubscriptionSubscribers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ceAnomalySubscription.CeAnomalySubscriptionSubscribers">CeAnomalySubscriptionSubscribers</a>

---



