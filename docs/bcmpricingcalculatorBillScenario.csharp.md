# `bcmpricingcalculatorBillScenario` Submodule <a name="`bcmpricingcalculatorBillScenario` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillScenario <a name="BcmpricingcalculatorBillScenario" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenario(Construct Scope, string Id, BcmpricingcalculatorBillScenarioConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig">BcmpricingcalculatorBillScenarioConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig">BcmpricingcalculatorBillScenarioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn">ResetCostCategoryGroupSharingPreferenceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference">ResetGroupSharingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags"></a>

```csharp
private void PutTags(IResolvable|BcmpricingcalculatorBillScenarioTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

---

##### `ResetCostCategoryGroupSharingPreferenceArn` <a name="ResetCostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn"></a>

```csharp
private void ResetCostCategoryGroupSharingPreferenceArn()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetGroupSharingPreference` <a name="ResetGroupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference"></a>

```csharp
private void ResetGroupSharingPreference()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillScenario.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillScenario.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillScenario.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmpricingcalculatorBillScenario.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmpricingcalculatorBillScenario to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmpricingcalculatorBillScenario that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillScenario to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval">BillInterval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId">BillScenarioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput">CostCategoryGroupSharingPreferenceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput">GroupSharingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn">CostCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference">GroupSharingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BillInterval`<sup>Required</sup> <a name="BillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval"></a>

```csharp
public BcmpricingcalculatorBillScenarioBillIntervalOutputReference BillInterval { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a>

---

##### `BillScenarioId`<sup>Required</sup> <a name="BillScenarioId" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId"></a>

```csharp
public string BillScenarioId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags"></a>

```csharp
public BcmpricingcalculatorBillScenarioTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a>

---

##### `CostCategoryGroupSharingPreferenceArnInput`<sup>Optional</sup> <a name="CostCategoryGroupSharingPreferenceArnInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput"></a>

```csharp
public string CostCategoryGroupSharingPreferenceArnInput { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `GroupSharingPreferenceInput`<sup>Optional</sup> <a name="GroupSharingPreferenceInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput"></a>

```csharp
public string GroupSharingPreferenceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillScenarioTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

---

##### `CostCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="CostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn"></a>

```csharp
public string CostCategoryGroupSharingPreferenceArn { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `GroupSharingPreference`<sup>Required</sup> <a name="GroupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference"></a>

```csharp
public string GroupSharingPreference { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillScenarioBillInterval <a name="BcmpricingcalculatorBillScenarioBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenarioBillInterval {

};
```


### BcmpricingcalculatorBillScenarioConfig <a name="BcmpricingcalculatorBillScenarioConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenarioConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CostCategoryGroupSharingPreferenceArn = null,
    string ExpiresAt = null,
    string GroupSharingPreference = null,
    string Name = null,
    IResolvable|BcmpricingcalculatorBillScenarioTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn">CostCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | The ARN of the cost category group sharing preference. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | The timestamp when the bill scenario expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference">GroupSharingPreference</a></code> | <code>string</code> | The group sharing preference for the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name">Name</a></code> | <code>string</code> | The name of the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CostCategoryGroupSharingPreferenceArn`<sup>Optional</sup> <a name="CostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn"></a>

```csharp
public string CostCategoryGroupSharingPreferenceArn { get; set; }
```

- *Type:* string

The ARN of the cost category group sharing preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn BcmpricingcalculatorBillScenario#cost_category_group_sharing_preference_arn}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

The timestamp when the bill scenario expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at BcmpricingcalculatorBillScenario#expires_at}

---

##### `GroupSharingPreference`<sup>Optional</sup> <a name="GroupSharingPreference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference"></a>

```csharp
public string GroupSharingPreference { get; set; }
```

- *Type:* string

The group sharing preference for the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference BcmpricingcalculatorBillScenario#group_sharing_preference}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#name BcmpricingcalculatorBillScenario#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillScenarioTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#tags BcmpricingcalculatorBillScenario#tags}

---

### BcmpricingcalculatorBillScenarioTags <a name="BcmpricingcalculatorBillScenarioTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenarioTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillScenarioBillIntervalOutputReference <a name="BcmpricingcalculatorBillScenarioBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenarioBillIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue"></a>

```csharp
public BcmpricingcalculatorBillScenarioBillInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a>

---


### BcmpricingcalculatorBillScenarioTagsList <a name="BcmpricingcalculatorBillScenarioTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenarioTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get"></a>

```csharp
private BcmpricingcalculatorBillScenarioTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillScenarioTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>[]

---


### BcmpricingcalculatorBillScenarioTagsOutputReference <a name="BcmpricingcalculatorBillScenarioTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmpricingcalculatorBillScenarioTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmpricingcalculatorBillScenarioTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>

---



