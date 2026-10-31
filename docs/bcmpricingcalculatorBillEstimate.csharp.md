# `bcmpricingcalculatorBillEstimate` Submodule <a name="`bcmpricingcalculatorBillEstimate` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillEstimate <a name="BcmpricingcalculatorBillEstimate" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate awscc_bcmpricingcalculator_bill_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimate(Construct Scope, string Id, BcmpricingcalculatorBillEstimateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig">BcmpricingcalculatorBillEstimateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig">BcmpricingcalculatorBillEstimateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetBillScenarioId">ResetBillScenarioId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags"></a>

```csharp
private void PutTags(IResolvable|BcmpricingcalculatorBillEstimateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

---

##### `ResetBillScenarioId` <a name="ResetBillScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetBillScenarioId"></a>

```csharp
private void ResetBillScenarioId()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillEstimate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillEstimate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillEstimate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillEstimate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmpricingcalculatorBillEstimate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmpricingcalculatorBillEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billEstimateId">BillEstimateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billInterval">BillInterval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference">BcmpricingcalculatorBillEstimateBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn">CostCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate">CostCategoryGroupSharingPreferenceEffectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.groupSharingPreference">GroupSharingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList">BcmpricingcalculatorBillEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioIdInput">BillScenarioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioId">BillScenarioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BillEstimateId`<sup>Required</sup> <a name="BillEstimateId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billEstimateId"></a>

```csharp
public string BillEstimateId { get; }
```

- *Type:* string

---

##### `BillInterval`<sup>Required</sup> <a name="BillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billInterval"></a>

```csharp
public BcmpricingcalculatorBillEstimateBillIntervalOutputReference BillInterval { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference">BcmpricingcalculatorBillEstimateBillIntervalOutputReference</a>

---

##### `CostCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="CostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn"></a>

```csharp
public string CostCategoryGroupSharingPreferenceArn { get; }
```

- *Type:* string

---

##### `CostCategoryGroupSharingPreferenceEffectiveDate`<sup>Required</sup> <a name="CostCategoryGroupSharingPreferenceEffectiveDate" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate"></a>

```csharp
public string CostCategoryGroupSharingPreferenceEffectiveDate { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `GroupSharingPreference`<sup>Required</sup> <a name="GroupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.groupSharingPreference"></a>

```csharp
public string GroupSharingPreference { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tags"></a>

```csharp
public BcmpricingcalculatorBillEstimateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList">BcmpricingcalculatorBillEstimateTagsList</a>

---

##### `BillScenarioIdInput`<sup>Optional</sup> <a name="BillScenarioIdInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioIdInput"></a>

```csharp
public string BillScenarioIdInput { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tagsInput"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillEstimateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

---

##### `BillScenarioId`<sup>Required</sup> <a name="BillScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioId"></a>

```csharp
public string BillScenarioId { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillEstimateBillInterval <a name="BcmpricingcalculatorBillEstimateBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimateBillInterval {

};
```


### BcmpricingcalculatorBillEstimateConfig <a name="BcmpricingcalculatorBillEstimateConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string BillScenarioId = null,
    string ExpiresAt = null,
    IResolvable|BcmpricingcalculatorBillEstimateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.name">Name</a></code> | <code>string</code> | The name of the bill estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.billScenarioId">BillScenarioId</a></code> | <code>string</code> | The unique identifier of the bill scenario this estimate is based on. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | The timestamp when the bill estimate expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the bill estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#name BcmpricingcalculatorBillEstimate#name}

---

##### `BillScenarioId`<sup>Optional</sup> <a name="BillScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.billScenarioId"></a>

```csharp
public string BillScenarioId { get; set; }
```

- *Type:* string

The unique identifier of the bill scenario this estimate is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#bill_scenario_id BcmpricingcalculatorBillEstimate#bill_scenario_id}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

The timestamp when the bill estimate expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#expires_at BcmpricingcalculatorBillEstimate#expires_at}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.tags"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillEstimateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#tags BcmpricingcalculatorBillEstimate#tags}

---

### BcmpricingcalculatorBillEstimateTags <a name="BcmpricingcalculatorBillEstimateTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#key BcmpricingcalculatorBillEstimate#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#value BcmpricingcalculatorBillEstimate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#key BcmpricingcalculatorBillEstimate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#value BcmpricingcalculatorBillEstimate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillEstimateBillIntervalOutputReference <a name="BcmpricingcalculatorBillEstimateBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimateBillIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval">BcmpricingcalculatorBillEstimateBillInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue"></a>

```csharp
public BcmpricingcalculatorBillEstimateBillInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval">BcmpricingcalculatorBillEstimateBillInterval</a>

---


### BcmpricingcalculatorBillEstimateTagsList <a name="BcmpricingcalculatorBillEstimateTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get"></a>

```csharp
private BcmpricingcalculatorBillEstimateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.internalValue"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillEstimateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>[]

---


### BcmpricingcalculatorBillEstimateTagsOutputReference <a name="BcmpricingcalculatorBillEstimateTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillEstimateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillEstimateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>

---



