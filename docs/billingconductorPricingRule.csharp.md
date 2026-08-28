# `billingconductorPricingRule` Submodule <a name="`billingconductorPricingRule` Submodule" id="@cdktn/provider-awscc.billingconductorPricingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorPricingRule <a name="BillingconductorPricingRule" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRule(Construct Scope, string Id, BillingconductorPricingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig">BillingconductorPricingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig">BillingconductorPricingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering">PutTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity">ResetBillingEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage">ResetModifierPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering">ResetTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType">ResetUsageType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags"></a>

```csharp
private void PutTags(IResolvable|BillingconductorPricingRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

---

##### `PutTiering` <a name="PutTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering"></a>

```csharp
private void PutTiering(BillingconductorPricingRuleTiering Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `ResetBillingEntity` <a name="ResetBillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity"></a>

```csharp
private void ResetBillingEntity()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetModifierPercentage` <a name="ResetModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage"></a>

```csharp
private void ResetModifierPercentage()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation"></a>

```csharp
private void ResetOperation()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTiering` <a name="ResetTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering"></a>

```csharp
private void ResetTiering()
```

##### `ResetUsageType` <a name="ResetUsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType"></a>

```csharp
private void ResetUsageType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorPricingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorPricingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorPricingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorPricingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingconductorPricingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingconductorPricingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorPricingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount">AssociatedPricingPlanCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering">Tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput">BillingEntityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput">ModifierPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput">TieringInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput">UsageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity">BillingEntity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage">ModifierPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType">UsageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociatedPricingPlanCount`<sup>Required</sup> <a name="AssociatedPricingPlanCount" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount"></a>

```csharp
public double AssociatedPricingPlanCount { get; }
```

- *Type:* double

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags"></a>

```csharp
public BillingconductorPricingRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a>

---

##### `Tiering`<sup>Required</sup> <a name="Tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering"></a>

```csharp
public BillingconductorPricingRuleTieringOutputReference Tiering { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a>

---

##### `BillingEntityInput`<sup>Optional</sup> <a name="BillingEntityInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput"></a>

```csharp
public string BillingEntityInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ModifierPercentageInput`<sup>Optional</sup> <a name="ModifierPercentageInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput"></a>

```csharp
public double ModifierPercentageInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

---

##### `TieringInput`<sup>Optional</sup> <a name="TieringInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTiering TieringInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsageTypeInput`<sup>Optional</sup> <a name="UsageTypeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput"></a>

```csharp
public string UsageTypeInput { get; }
```

- *Type:* string

---

##### `BillingEntity`<sup>Required</sup> <a name="BillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity"></a>

```csharp
public string BillingEntity { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ModifierPercentage`<sup>Required</sup> <a name="ModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage"></a>

```csharp
public double ModifierPercentage { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType"></a>

```csharp
public string UsageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorPricingRuleConfig <a name="BillingconductorPricingRuleConfig" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Scope,
    string Type,
    string BillingEntity = null,
    string Description = null,
    double ModifierPercentage = null,
    string Operation = null,
    string Service = null,
    IResolvable|BillingconductorPricingRuleTags[] Tags = null,
    BillingconductorPricingRuleTiering Tiering = null,
    string UsageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name">Name</a></code> | <code>string</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope">Scope</a></code> | <code>string</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type">Type</a></code> | <code>string</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity">BillingEntity</a></code> | <code>string</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description">Description</a></code> | <code>string</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage">ModifierPercentage</a></code> | <code>double</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation">Operation</a></code> | <code>string</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service">Service</a></code> | <code>string</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering">Tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType">UsageType</a></code> | <code>string</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `BillingEntity`<sup>Optional</sup> <a name="BillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity"></a>

```csharp
public string BillingEntity { get; set; }
```

- *Type:* string

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `ModifierPercentage`<sup>Optional</sup> <a name="ModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage"></a>

```csharp
public double ModifierPercentage { get; set; }
```

- *Type:* double

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `Tiering`<sup>Optional</sup> <a name="Tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering"></a>

```csharp
public BillingconductorPricingRuleTiering Tiering { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `UsageType`<sup>Optional</sup> <a name="UsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType"></a>

```csharp
public string UsageType { get; set; }
```

- *Type:* string

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

### BillingconductorPricingRuleTags <a name="BillingconductorPricingRuleTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}.

---

### BillingconductorPricingRuleTiering <a name="BillingconductorPricingRuleTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTiering {
    BillingconductorPricingRuleTieringFreeTier FreeTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier">FreeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | The possible customizable free tier configurations. |

---

##### `FreeTier`<sup>Optional</sup> <a name="FreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier"></a>

```csharp
public BillingconductorPricingRuleTieringFreeTier FreeTier { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

The possible customizable free tier configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#free_tier BillingconductorPricingRule#free_tier}

---

### BillingconductorPricingRuleTieringFreeTier <a name="BillingconductorPricingRuleTieringFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTieringFreeTier {
    bool|IResolvable Activated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated">Activated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}. |

---

##### `Activated`<sup>Optional</sup> <a name="Activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated"></a>

```csharp
public bool|IResolvable Activated { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorPricingRuleTagsList <a name="BillingconductorPricingRuleTagsList" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get"></a>

```csharp
private BillingconductorPricingRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>[]

---


### BillingconductorPricingRuleTagsOutputReference <a name="BillingconductorPricingRuleTagsOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>

---


### BillingconductorPricingRuleTieringFreeTierOutputReference <a name="BillingconductorPricingRuleTieringFreeTierOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTieringFreeTierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated">ResetActivated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActivated` <a name="ResetActivated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated"></a>

```csharp
private void ResetActivated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput">ActivatedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated">Activated</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivatedInput`<sup>Optional</sup> <a name="ActivatedInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput"></a>

```csharp
public bool|IResolvable ActivatedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated"></a>

```csharp
public bool|IResolvable Activated { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTieringFreeTier InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---


### BillingconductorPricingRuleTieringOutputReference <a name="BillingconductorPricingRuleTieringOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorPricingRuleTieringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier">PutFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier">ResetFreeTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFreeTier` <a name="PutFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier"></a>

```csharp
private void PutFreeTier(BillingconductorPricingRuleTieringFreeTier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `ResetFreeTier` <a name="ResetFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier"></a>

```csharp
private void ResetFreeTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier">FreeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput">FreeTierInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FreeTier`<sup>Required</sup> <a name="FreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier"></a>

```csharp
public BillingconductorPricingRuleTieringFreeTierOutputReference FreeTier { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a>

---

##### `FreeTierInput`<sup>Optional</sup> <a name="FreeTierInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTieringFreeTier FreeTierInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorPricingRuleTiering InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---



