# `bcmpricingcalculatorWorkloadEstimate` Submodule <a name="`bcmpricingcalculatorWorkloadEstimate` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorWorkloadEstimate <a name="BcmpricingcalculatorWorkloadEstimate" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate awscc_bcmpricingcalculator_workload_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorWorkloadEstimate(Construct Scope, string Id, BcmpricingcalculatorWorkloadEstimateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig">BcmpricingcalculatorWorkloadEstimateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig">BcmpricingcalculatorWorkloadEstimateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetRateType">ResetRateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags"></a>

```csharp
private void PutTags(IResolvable|BcmpricingcalculatorWorkloadEstimateTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

---

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetRateType` <a name="ResetRateType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetRateType"></a>

```csharp
private void ResetRateType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorWorkloadEstimate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorWorkloadEstimate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorWorkloadEstimate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorWorkloadEstimate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmpricingcalculatorWorkloadEstimate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmpricingcalculatorWorkloadEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorWorkloadEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.costCurrency">CostCurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTimestamp">RateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList">BcmpricingcalculatorWorkloadEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.totalCost">TotalCost</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId">WorkloadEstimateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTypeInput">RateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateType">RateType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CostCurrency`<sup>Required</sup> <a name="CostCurrency" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.costCurrency"></a>

```csharp
public string CostCurrency { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RateTimestamp`<sup>Required</sup> <a name="RateTimestamp" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTimestamp"></a>

```csharp
public string RateTimestamp { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tags"></a>

```csharp
public BcmpricingcalculatorWorkloadEstimateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList">BcmpricingcalculatorWorkloadEstimateTagsList</a>

---

##### `TotalCost`<sup>Required</sup> <a name="TotalCost" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.totalCost"></a>

```csharp
public double TotalCost { get; }
```

- *Type:* double

---

##### `WorkloadEstimateId`<sup>Required</sup> <a name="WorkloadEstimateId" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId"></a>

```csharp
public string WorkloadEstimateId { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RateTypeInput`<sup>Optional</sup> <a name="RateTypeInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTypeInput"></a>

```csharp
public string RateTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tagsInput"></a>

```csharp
public IResolvable|BcmpricingcalculatorWorkloadEstimateTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RateType`<sup>Required</sup> <a name="RateType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateType"></a>

```csharp
public string RateType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorWorkloadEstimateConfig <a name="BcmpricingcalculatorWorkloadEstimateConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorWorkloadEstimateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ExpiresAt = null,
    string RateType = null,
    IResolvable|BcmpricingcalculatorWorkloadEstimateTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.name">Name</a></code> | <code>string</code> | The name of the workload estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | The timestamp when the workload estimate will expire. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.rateType">RateType</a></code> | <code>string</code> | The type of pricing rates used for the estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the workload estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#name BcmpricingcalculatorWorkloadEstimate#name}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

The timestamp when the workload estimate will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#expires_at BcmpricingcalculatorWorkloadEstimate#expires_at}

---

##### `RateType`<sup>Optional</sup> <a name="RateType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.rateType"></a>

```csharp
public string RateType { get; set; }
```

- *Type:* string

The type of pricing rates used for the estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#rate_type BcmpricingcalculatorWorkloadEstimate#rate_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.tags"></a>

```csharp
public IResolvable|BcmpricingcalculatorWorkloadEstimateTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#tags BcmpricingcalculatorWorkloadEstimate#tags}

---

### BcmpricingcalculatorWorkloadEstimateTags <a name="BcmpricingcalculatorWorkloadEstimateTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorWorkloadEstimateTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#key BcmpricingcalculatorWorkloadEstimate#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#value BcmpricingcalculatorWorkloadEstimate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#key BcmpricingcalculatorWorkloadEstimate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#value BcmpricingcalculatorWorkloadEstimate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorWorkloadEstimateTagsList <a name="BcmpricingcalculatorWorkloadEstimateTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorWorkloadEstimateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get"></a>

```csharp
private BcmpricingcalculatorWorkloadEstimateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.internalValue"></a>

```csharp
public IResolvable|BcmpricingcalculatorWorkloadEstimateTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>[]

---


### BcmpricingcalculatorWorkloadEstimateTagsOutputReference <a name="BcmpricingcalculatorWorkloadEstimateTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorWorkloadEstimateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmpricingcalculatorWorkloadEstimateTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>

---



