# `computeoptimizerAutomationRule` Submodule <a name="`computeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerAutomationRule <a name="ComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRule(Construct Scope, string Id, ComputeoptimizerAutomationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig">ComputeoptimizerAutomationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig">ComputeoptimizerAutomationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration">PutOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration">ResetOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria"></a>

```csharp
private void PutCriteria(ComputeoptimizerAutomationRuleCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `PutOrganizationConfiguration` <a name="PutOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration"></a>

```csharp
private void PutOrganizationConfiguration(ComputeoptimizerAutomationRuleOrganizationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule"></a>

```csharp
private void PutSchedule(ComputeoptimizerAutomationRuleSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags"></a>

```csharp
private void PutTags(IResolvable|ComputeoptimizerAutomationRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

---

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria"></a>

```csharp
private void ResetCriteria()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOrganizationConfiguration` <a name="ResetOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration"></a>

```csharp
private void ResetOrganizationConfiguration()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComputeoptimizerAutomationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComputeoptimizerAutomationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComputeoptimizerAutomationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComputeoptimizerAutomationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeoptimizerAutomationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration">OrganizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision">RuleRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput">CriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput">OrganizationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput">PriorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput">RecommendedActionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes">RecommendedActionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `OrganizationConfiguration`<sup>Required</sup> <a name="OrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```csharp
public ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference OrganizationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `RuleRevision`<sup>Required</sup> <a name="RuleRevision" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision"></a>

```csharp
public string RuleRevision { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule"></a>

```csharp
public ComputeoptimizerAutomationRuleScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags"></a>

```csharp
public ComputeoptimizerAutomationRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteria CriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationConfigurationInput`<sup>Optional</sup> <a name="OrganizationConfigurationInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleOrganizationConfiguration OrganizationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput"></a>

```csharp
public string PriorityInput { get; }
```

- *Type:* string

---

##### `RecommendedActionTypesInput`<sup>Optional</sup> <a name="RecommendedActionTypesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput"></a>

```csharp
public string[] RecommendedActionTypesInput { get; }
```

- *Type:* string[]

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `RecommendedActionTypes`<sup>Required</sup> <a name="RecommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```csharp
public string[] RecommendedActionTypes { get; }
```

- *Type:* string[]

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerAutomationRuleConfig <a name="ComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] RecommendedActionTypes,
    string RuleType,
    ComputeoptimizerAutomationRuleSchedule Schedule,
    string Status,
    ComputeoptimizerAutomationRuleCriteria Criteria = null,
    string Description = null,
    ComputeoptimizerAutomationRuleOrganizationConfiguration OrganizationConfiguration = null,
    string Priority = null,
    IResolvable|ComputeoptimizerAutomationRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes">RecommendedActionTypes</a></code> | <code>string[]</code> | The types of recommended actions this rule will implement. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType">RuleType</a></code> | <code>string</code> | The type of automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | The schedule configuration for when the rule runs. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status">Status</a></code> | <code>string</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | Filter criteria that specify which recommended actions qualify for implementation. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration">OrganizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | Organization configuration for organization rules, including rule apply order and account scope. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority">Priority</a></code> | <code>string</code> | Rule priority within its group. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]</code> | Tags associated with the automation rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}

---

##### `RecommendedActionTypes`<sup>Required</sup> <a name="RecommendedActionTypes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes"></a>

```csharp
public string[] RecommendedActionTypes { get; set; }
```

- *Type:* string[]

The types of recommended actions this rule will implement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

The type of automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule"></a>

```csharp
public ComputeoptimizerAutomationRuleSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

The schedule configuration for when the rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

Filter criteria that specify which recommended actions qualify for implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}

---

##### `OrganizationConfiguration`<sup>Optional</sup> <a name="OrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration"></a>

```csharp
public ComputeoptimizerAutomationRuleOrganizationConfiguration OrganizationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

Organization configuration for organization rules, including rule apply order and account scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority"></a>

```csharp
public string Priority { get; set; }
```

- *Type:* string

Rule priority within its group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

Tags associated with the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}

---

### ComputeoptimizerAutomationRuleCriteria <a name="ComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteria {
    IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] EbsVolumeSizeInGib = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] EbsVolumeType = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] EstimatedMonthlySavings = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] LookBackPeriodInDays = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion[] Region = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn[] ResourceArn = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag[] ResourceTag = null,
    IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] RestartNeeded = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib">EbsVolumeSizeInGib</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType">EbsVolumeType</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings">EstimatedMonthlySavings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays">LookBackPeriodInDays</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region">Region</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn">ResourceArn</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag">ResourceTag</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded">RestartNeeded</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}. |

---

##### `EbsVolumeSizeInGib`<sup>Optional</sup> <a name="EbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] EbsVolumeSizeInGib { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] EbsVolumeType { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}.

---

##### `EstimatedMonthlySavings`<sup>Optional</sup> <a name="EstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] EstimatedMonthlySavings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}.

---

##### `LookBackPeriodInDays`<sup>Optional</sup> <a name="LookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] LookBackPeriodInDays { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion[] Region { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn[] ResourceArn { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}.

---

##### `ResourceTag`<sup>Optional</sup> <a name="ResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag[] ResourceTag { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}.

---

##### `RestartNeeded`<sup>Optional</sup> <a name="RestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] RestartNeeded { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib {
    string Comparison = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeType {
    string Comparison = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings {
    string Comparison = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays {
    string Comparison = null,
    double[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values">Values</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values"></a>

```csharp
public double[] Values { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRegion <a name="ComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaRegion {
    string Comparison = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceArn <a name="ComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaResourceArn {
    string Comparison = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceTag <a name="ComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaResourceTag {
    string Comparison = null,
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaRestartNeeded {
    string Comparison = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison">Comparison</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleOrganizationConfiguration <a name="ComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleOrganizationConfiguration {
    string[] AccountIds = null,
    string RuleApplyOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds">AccountIds</a></code> | <code>string[]</code> | List of account IDs where the organization rule applies. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder">RuleApplyOrder</a></code> | <code>string</code> | When the rule should be applied relative to account rules. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

List of account IDs where the organization rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#account_ids ComputeoptimizerAutomationRule#account_ids}

---

##### `RuleApplyOrder`<sup>Optional</sup> <a name="RuleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder"></a>

```csharp
public string RuleApplyOrder { get; set; }
```

- *Type:* string

When the rule should be applied relative to account rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order ComputeoptimizerAutomationRule#rule_apply_order}

---

### ComputeoptimizerAutomationRuleSchedule <a name="ComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleSchedule {
    double ExecutionWindowInMinutes = null,
    string ScheduleExpression = null,
    string ScheduleExpressionTimezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes">ExecutionWindowInMinutes</a></code> | <code>double</code> | Execution window duration in minutes. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Schedule expression (e.g., cron or rate expression). |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | IANA timezone identifier. |

---

##### `ExecutionWindowInMinutes`<sup>Optional</sup> <a name="ExecutionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes"></a>

```csharp
public double ExecutionWindowInMinutes { get; set; }
```

- *Type:* double

Execution window duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes ComputeoptimizerAutomationRule#execution_window_in_minutes}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Schedule expression (e.g., cron or rate expression).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule_expression ComputeoptimizerAutomationRule#schedule_expression}

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; set; }
```

- *Type:* string

IANA timezone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone ComputeoptimizerAutomationRule#schedule_expression_timezone}

---

### ComputeoptimizerAutomationRuleTags <a name="ComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput">ValuesInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput"></a>

```csharp
public double[] ValuesInput { get; }
```

- *Type:* double[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### ComputeoptimizerAutomationRuleCriteriaOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib">PutEbsVolumeSizeInGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType">PutEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings">PutEstimatedMonthlySavings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays">PutLookBackPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion">PutRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn">PutResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag">PutResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded">PutRestartNeeded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib">ResetEbsVolumeSizeInGib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings">ResetEstimatedMonthlySavings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays">ResetLookBackPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag">ResetResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded">ResetRestartNeeded</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsVolumeSizeInGib` <a name="PutEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib"></a>

```csharp
private void PutEbsVolumeSizeInGib(IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

---

##### `PutEbsVolumeType` <a name="PutEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType"></a>

```csharp
private void PutEbsVolumeType(IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

---

##### `PutEstimatedMonthlySavings` <a name="PutEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings"></a>

```csharp
private void PutEstimatedMonthlySavings(IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

---

##### `PutLookBackPeriodInDays` <a name="PutLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays"></a>

```csharp
private void PutLookBackPeriodInDays(IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

---

##### `PutRegion` <a name="PutRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion"></a>

```csharp
private void PutRegion(IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

---

##### `PutResourceArn` <a name="PutResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn"></a>

```csharp
private void PutResourceArn(IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

---

##### `PutResourceTag` <a name="PutResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag"></a>

```csharp
private void PutResourceTag(IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

---

##### `PutRestartNeeded` <a name="PutRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded"></a>

```csharp
private void PutRestartNeeded(IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

---

##### `ResetEbsVolumeSizeInGib` <a name="ResetEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib"></a>

```csharp
private void ResetEbsVolumeSizeInGib()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType"></a>

```csharp
private void ResetEbsVolumeType()
```

##### `ResetEstimatedMonthlySavings` <a name="ResetEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings"></a>

```csharp
private void ResetEstimatedMonthlySavings()
```

##### `ResetLookBackPeriodInDays` <a name="ResetLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays"></a>

```csharp
private void ResetLookBackPeriodInDays()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetResourceTag` <a name="ResetResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag"></a>

```csharp
private void ResetResourceTag()
```

##### `ResetRestartNeeded` <a name="ResetRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded"></a>

```csharp
private void ResetRestartNeeded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">EbsVolumeSizeInGib</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">EstimatedMonthlySavings</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">LookBackPeriodInDays</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">Region</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">ResourceArn</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">ResourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">RestartNeeded</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput">EbsVolumeSizeInGibInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput">EstimatedMonthlySavingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput">LookBackPeriodInDaysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput">RegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput">ResourceTagInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput">RestartNeededInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsVolumeSizeInGib`<sup>Required</sup> <a name="EbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList EbsVolumeSizeInGib { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList EbsVolumeType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `EstimatedMonthlySavings`<sup>Required</sup> <a name="EstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList EstimatedMonthlySavings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `LookBackPeriodInDays`<sup>Required</sup> <a name="LookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList LookBackPeriodInDays { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaRegionList Region { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaResourceArnList ResourceArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaResourceTagList ResourceTag { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `RestartNeeded`<sup>Required</sup> <a name="RestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```csharp
public ComputeoptimizerAutomationRuleCriteriaRestartNeededList RestartNeeded { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `EbsVolumeSizeInGibInput`<sup>Optional</sup> <a name="EbsVolumeSizeInGibInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib[] EbsVolumeSizeInGibInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>[]

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEbsVolumeType[] EbsVolumeTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>[]

---

##### `EstimatedMonthlySavingsInput`<sup>Optional</sup> <a name="EstimatedMonthlySavingsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings[] EstimatedMonthlySavingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>[]

---

##### `LookBackPeriodInDaysInput`<sup>Optional</sup> <a name="LookBackPeriodInDaysInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays[] LookBackPeriodInDaysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion[] RegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn[] ResourceArnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

---

##### `ResourceTagInput`<sup>Optional</sup> <a name="ResourceTagInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag[] ResourceTagInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

---

##### `RestartNeededInput`<sup>Optional</sup> <a name="RestartNeededInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] RestartNeededInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---


### ComputeoptimizerAutomationRuleCriteriaRegionList <a name="ComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRegion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaResourceArnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceArn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaResourceTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaResourceTag InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaRestartNeededList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>[]

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleCriteriaRestartNeeded InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder">ResetRuleApplyOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```

##### `ResetRuleApplyOrder` <a name="ResetRuleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder"></a>

```csharp
private void ResetRuleApplyOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput">RuleApplyOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">RuleApplyOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `RuleApplyOrderInput`<sup>Optional</sup> <a name="RuleApplyOrderInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput"></a>

```csharp
public string RuleApplyOrderInput { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `RuleApplyOrder`<sup>Required</sup> <a name="RuleApplyOrder" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```csharp
public string RuleApplyOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleOrganizationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### ComputeoptimizerAutomationRuleScheduleOutputReference <a name="ComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes">ResetExecutionWindowInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionWindowInMinutes` <a name="ResetExecutionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes"></a>

```csharp
private void ResetExecutionWindowInMinutes()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone"></a>

```csharp
private void ResetScheduleExpressionTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput">ExecutionWindowInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">ExecutionWindowInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionWindowInMinutesInput`<sup>Optional</sup> <a name="ExecutionWindowInMinutesInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput"></a>

```csharp
public double ExecutionWindowInMinutesInput { get; }
```

- *Type:* double

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```csharp
public string ScheduleExpressionTimezoneInput { get; }
```

- *Type:* string

---

##### `ExecutionWindowInMinutes`<sup>Required</sup> <a name="ExecutionWindowInMinutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```csharp
public double ExecutionWindowInMinutes { get; }
```

- *Type:* double

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---


### ComputeoptimizerAutomationRuleTagsList <a name="ComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get"></a>

```csharp
private ComputeoptimizerAutomationRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>[]

---


### ComputeoptimizerAutomationRuleTagsOutputReference <a name="ComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComputeoptimizerAutomationRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComputeoptimizerAutomationRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>

---



